import { Component } from '@angular/core';

import { IChartContrato, ILicitacion } from '../../../models/contratos.interfaces';
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
	public rowData: ILicitacion[] = [];
	totalEuros!: number;

	constructor(private _channelChartsService: ChannelChartsService) {
		this._channelChartsService.$subject.subscribe((data) => {
			this.titulo1 = data.titulo1;
			this.titulo2 = data.titulo2;
			this.tipoReporte = data.tipoReporte;
			this.rangos = data.rangos;
			this.tituloPagina = data.tituloPagina;
			const dataChart = this._generarData();
			const totalEuros = this._calcularTotal();
			let titleTotal = `Total licitaciones: ${this.rowData.length}`;
			if (this.tipoReporte === 'por result') {
				const countTenderSinDato = this.rowData.filter(item => item.arrayTenderResult === undefined);
				titleTotal = `${titleTotal} - sin dato: ${countTenderSinDato.length}`
			}
			this.options1 = this._generarChart('contratos', dataChart, this.titulo1, titleTotal);
			this.options2 = this._generarChart('sumPayableAmount', dataChart, this.titulo2, `Total euros: ${this.totalEuros.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`);
		});

		const data = localStorage.getItem('dataLicitacion');
		this.rowData = JSON.parse(data!) as ILicitacion[];
	}

	private _generarChart(yKeys: string, data: IChartContrato[], titulo: string, total: string) {
		return {
			title: { text: titulo },
			subtitle: { text: total },
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
						placement: 'inside',
						formatter: (params: { value: number }) => {
							return `                 ${this._formatearMoneda(params)}`;
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

	private _calcularTotal() {
		let initialValue = 0
		this.totalEuros = this.rowData.reduce(function (previousValue, currentValue) {
			return previousValue + currentValue.TotalAmount
		}, initialValue)
	}

	private _generarData(): IChartContrato[] {
		const data: IChartContrato[] = [];
		this.rangos.forEach((item) => {
			data.push(this._getDataRango(item));
		});
		return data;
	}

	private _getDataRango(rango: number): IChartContrato {
		const itemRango: IChartContrato = <IChartContrato>{};
		let rangoFilter: ILicitacion[] = [];
		let codeText = '';

		switch (this.tipoReporte) {
			case 'por importe': {
				const datosTipoReporte = Static.RANGO_IMPORTE.find((item) => item.id === rango);
				rangoFilter = this.rowData.filter(
					(item) =>
						item.TotalAmount >= datosTipoReporte!.value.rangoInicial &&
						item.TotalAmount <= datosTipoReporte!.value.rangoFinal
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

				rangoFilter = this.rowData.filter((item) => {
					if (!item.arrayTenderResult) {
						return false;
					}
					const resultCode = item.arrayTenderResult.find(tender => tender.ResultCode === rango.toString())
					return resultCode !== undefined
				});
				break;
			}
		}

		let suma = 0;
		rangoFilter.forEach((x) => {
			suma = suma + x.TotalAmount;
		});

		itemRango.codeText = codeText;
		itemRango.contratos = rangoFilter.length;
		itemRango.sumPayableAmount = suma;
		return itemRango;
	}
}
