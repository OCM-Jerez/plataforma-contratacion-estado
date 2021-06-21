import { Component, Input, OnInit } from '@angular/core';
import { IChartContrato, IContratoMenor } from '../../../../models/contratos.interfaces';
import { TipoGrafico } from '../../../../models/tipos-graficos.type';
import { Static } from '../../../../util/static';
import contratosmenoresJson from '../../../../../assets/data/contratosMenores2020map.json';
import { ChannelChartsService } from '../../../../channel-charts.service';

@Component({
	selector: 'app-porcode',
	templateUrl: './porcode.component.html',
	styleUrls: ['./porcode.component.scss']
})
export class PorcodeComponent {
	titulo = '';
	tipoReporte: TipoGrafico = 'por importe';
	rangos: number[] = [];
	tituloPagina = '';
	public options1: any;
	public options2: any;

	constructor(private _channelChartsService: ChannelChartsService) {
		this._channelChartsService.$subject.subscribe((data) => {
			this.titulo = data.titulo;
			this.tipoReporte = data.tipoReporte;
			this.rangos = data.rangos;
			this.tituloPagina = data.tituloPagina;
			const dataChart = this._generarData();
			this.options1 = this._generarChart('contratos', dataChart);
			this.options2 = this._generarChart('sumPayableAmount', dataChart);
		});
	}

	private _generarChart(yKeys: string, data: IChartContrato[]) {
		return {
			title: { text: this.titulo },
			// subtitle: { text: 'in billion U.S. dollars' },
			legend: { enabled: false },
			data: data,
			series: [
				{
					type: 'bar',
					xKey: 'codeText',
					yKeys: [yKeys],
					yNames: ['Nº contratos'],
					formatter: () => ({
						fill: ['#0075CD']
					}),
					label: {
						color: 'red',
						fontWeight: 'bold',
						formatter: (params: { value: number }) => {
							return this._formatearMoneda(params);
						}
					}
				}
			],
			axes: [
				{
					type: 'number',
					position: 'bottom',
					label: {
						fontWeight: 'bold',
						formatter: (params: { value: number }) => {
							return this._formatearMoneda(params);
						}
					}
				},
				{
					type: 'category',
					position: 'left'
				}
			]
		};
	}

	private _formatearMoneda(params: { value: number }): string {
		return params.value === undefined
			? ''
			: params.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
	}

	private _generarData() {
		const data: IChartContrato[] = [];

		this.rangos.forEach((item) => {
			data.push(this._getDataRango(item));
		});

		return data;
	}

	private _getDataRango(rango: number): IChartContrato {
		const itemRango: IChartContrato = <IChartContrato>{};
		let rangoFilter: IContratoMenor[] = [];
		let codeText = '';
		switch (this.tipoReporte) {
			case 'por importe': {
				const datosTipoReporte = Static.RANGO_IMPORTE.find((item) => item.id === rango);

				rangoFilter = contratosmenoresJson.filter(
					(item) =>
						item.TaxExclusiveAmount1 >= datosTipoReporte!.value.rangoInicial &&
						item.TaxExclusiveAmount1 <= datosTipoReporte!.value.rangoFinal
				);
				codeText = datosTipoReporte!.value.codeText;
				break;
			}
			case 'por procedure': {
				const procedure = Static.TIPOS_PROCEDURE.find((item) => item.id === rango);
				codeText = procedure ? procedure.value : 'Sin dato';

				rangoFilter = contratosmenoresJson.filter(
					(item) => item.ProcedureCode === rango.toString()
				);
			}
		}

		let suma = 0;
		rangoFilter.forEach((x) => {
			suma = suma + x.TaxExclusiveAmount1;
		});

		itemRango.codeText = codeText;
		itemRango.contratos = rangoFilter.length;
		itemRango.sumPayableAmount = suma;
		return itemRango;
	}
}
