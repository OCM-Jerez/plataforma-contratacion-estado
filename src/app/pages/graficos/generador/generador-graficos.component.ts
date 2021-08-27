import { Component } from '@angular/core';

import { IChartContrato, IContratoMenor, ILicitacion } from '../../../models/contratos.interfaces';
import { TipoGrafico } from '../../../models/tipos-graficos.type';
import { Static } from '../../../util/static';
import { ChannelChartsService } from '../../../services/channel-charts.service';

@Component({
	selector: 'app-porcode',
	templateUrl: './generador-graficos.component.html'
})
export class GeneradorGraficosComponent {
	titulo1 = '';
	titulo2 = '';
	tipoReporte: TipoGrafico = 'por importe';
	rangos: number[] = [];
	tituloPagina = '';
	public options1: any;
	public options2: any;
	public rowData: IContratoMenor[] = [];

	constructor(private _channelChartsService: ChannelChartsService) {
		this._channelChartsService.$subject.subscribe((data) => {
			this.titulo1 = data.titulo1;
			this.titulo2 = data.titulo2;
			this.tipoReporte = data.tipoReporte;
			this.rangos = data.rangos;
			this.tituloPagina = data.tituloPagina;
			const dataChart = this._generarData();
			this.options1 = this._generarChart('contratos', dataChart, this.titulo1);
			this.options2 = this._generarChart('sumPayableAmount', dataChart, this.titulo2);
		});

		const data = localStorage.getItem('dataLicitacion');
		this.rowData = JSON.parse(data!) as IContratoMenor[];
	}

	private _generarChart(yKeys: string, data: IChartContrato[], titulo: string) {
		return {
			title: { text: titulo },
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
						rotation: 45,
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
				rangoFilter = this.rowData.filter(
					(item) =>
						item.TaxExclusiveAmount >= datosTipoReporte!.value.rangoInicial &&
						item.TaxExclusiveAmount <= datosTipoReporte!.value.rangoFinal
				);
				codeText = datosTipoReporte!.value.codeText;
				break;
			}
			case 'por procedure': {
				const procedure = Static.TIPOS_PROCEDURE.find((item) => item.id === rango);
				codeText = procedure ? procedure.value : 'Sin dato';
				rangoFilter = this.rowData.filter(
					(item) => item.ProcedureCode === rango.toString()
				);
				break;
			}
			case 'por urgency': {
				const procedure = Static.TIPOS_URGENCY.find((item) => item.id === rango);
				codeText = procedure ? procedure.value : 'Sin dato';
				rangoFilter = this.rowData.filter((item) => item.UrgencyCode === rango.toString());
				break;
			}
			case 'por type': {
				const procedure = Static.TIPOS_TYPE.find((item) => item.id === rango);
				codeText = procedure ? procedure.value : 'Sin dato';
				rangoFilter = this.rowData.filter((item) => item.TypeCode === rango.toString());
				break;
			}
			case 'por subtype': {
				const procedure = Static.TIPOS_SUBTYPE.find((item) => item.id === rango);
				codeText = procedure ? procedure.value : 'Sin dato';
				rangoFilter = this.rowData.filter((item) => item.SubTypeCode === rango.toString());
				break;
			}
			case 'por result': {
				const procedure = Static.TIPOS_RESULT.find((item) => item.id === rango);
				codeText = procedure ? procedure.value : 'Sin dato';
				rangoFilter = this.rowData.filter((item) => item.ResultCode === rango.toString());
				break;
			}
		}

		let suma = 0;
		rangoFilter.forEach((x) => {
			suma = suma + x.TaxExclusiveAmount;
		});

		itemRango.codeText = codeText;
		itemRango.contratos = rangoFilter.length;
		itemRango.sumPayableAmount = suma;
		return itemRango;
	}
}
