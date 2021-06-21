/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component } from '@angular/core';

import * as agCharts from 'ag-charts-community';
import { IContratoMenor } from 'src/app/models/contratos.interfaces';
import contratosmenoresJson from '../../../../../assets/data/contratosMenores2020map.json';
import { IChartContrato } from '../../../../models/contratos.interfaces';
import { Static } from '../../../../util/static';
@Component({
	selector: 'app-suma-importes-por-procedurecode',
	templateUrl: './suma-importes-por-procedurecode.component.html'
})
export class SumaImportesPorProcedurecodeComponent {
	public options: any;
	constructor() {
		this.options = {
			title: { text: 'Por ProcedureCode acumulado' },
			// subtitle: { text: 'in billion U.S. dollars' },
			legend: { enabled: false },
			data: this.generarDataImporte(),
			series: [
				{
					type: 'bar',
					xKey: 'codeText',
					yKeys: ['sumPayableAmount'],
					yNames: ['Nº contratos'],
					formatter: () => ({
						fill: ['#0075CD']
					}),
					label: {
						color: 'red',
						fontWeight: 'bold',
						formatter: function (params: any) {
							// eslint-disable-next-line @typescript-eslint/no-unsafe-return
							return params.value === undefined
								? ''
								: params.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
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
						formatter: function (params: any) {
							// eslint-disable-next-line @typescript-eslint/no-unsafe-return
							return params.value === undefined
								? ''
								: params.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
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

	private generarDataImporte() {
		const data: IChartContrato[] = [];
		data.push(
			this.getDataRango(999),
			this.getDataRango(100),
			this.getDataRango(13),
			this.getDataRango(12),
			this.getDataRango(11),
			this.getDataRango(10),
			this.getDataRango(9),
			this.getDataRango(8),
			this.getDataRango(7),
			this.getDataRango(6),
			this.getDataRango(5),
			this.getDataRango(4),
			this.getDataRango(3),
			this.getDataRango(2),
			this.getDataRango(1)
		);
		console.log(data);
		return data;
	}
	private getDataRango(rango: number): IChartContrato {
		let codeSearch = '1';
		let codeText = 'Abierto';
		switch (rango) {
			case 2:
				codeSearch = '2';
				codeText = 'Restringido';
				break;
			case 3:
				codeSearch = '3';
				codeText = 'Negociado sin publicidad';
				break;
			case 4:
				codeSearch = '4';
				codeText = 'Negociado con publicidad';
				break;
			case 5:
				codeSearch = '5';
				codeText = 'Diálogo competitivo';
				break;
			case 6:
				codeSearch = '6';
				codeText = 'Contrato menor';
				break;
			case 7:
				codeSearch = '7';
				codeText = 'Derivado de acuerdo marco';
				break;
			case 8:
				codeSearch = '8';
				codeText = 'Concurso de proyectos';
				break;
			case 9:
				codeSearch = '9';
				codeText = 'Abierto simplificado';
				break;
			case 10:
				codeSearch = '10';
				codeText = 'Asociación para la innovación';
				break;
			case 11:
				codeSearch = '11';
				codeText = 'Derivado de asociación para la innovación';
				break;
			case 12:
				codeSearch = '12';
				codeText = ' Basado en un sistema dinámico de adquisición';
				break;
			case 13:
				codeSearch = '13';
				codeText = 'Licitación con negociación';
				break;
			case 100:
				codeSearch = '100';
				codeText = 'Normas internas';
				break;
			case 999:
				codeSearch = '999';
				codeText = 'Otros';
				break;
		}
		// Static.TIPOS.find(x=>x.id==5);
		const rango1 = contratosmenoresJson.filter((item) => item.ProcedureCode === codeSearch);
		let suma = 0;
		rango1.forEach((x) => {
			suma = suma + x.TaxExclusiveAmount1;
		});

		const itemRango: IChartContrato = {
			codeText,
			contratos: rango1.length,
			sumPayableAmount: suma
		};
		return itemRango;
	}
}
