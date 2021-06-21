/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component } from '@angular/core';

import * as agCharts from 'ag-charts-community';
import { IContratoMenor } from 'src/app/models/contratos.interfaces';
import contratosmenoresJson from '../../../../../assets/data/contratosMenores2020map.json';
import { IChartContrato } from '../../../../models/contratos.interfaces';
import { Static } from '../../../../util/static';
@Component({
	selector: 'app-suma-importes-por-resultcode',
	templateUrl: './suma-importes-por-resultcode.component.html'
})
export class SumaImportesPorResultcodeComponent {
	public options: any;
	constructor() {
		this.generarDataImporte();
		this.options = {
			title: { text: 'Por resultCode acumulado' },
			padding: {
				top: 40,
				right: 50,
				bottom: 40,
				left: 40
			},
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
			this.getDataRango(10),
			this.getDataRango(9),
			this.getDataRango(8),
			this.getDataRango(7),
			this.getDataRango(6),
			this.getDataRango(5),
			this.getDataRango(4),
			this.getDataRango(2),
			this.getDataRango(1)
		);
		console.log(data);
		return data;
	}
	private getDataRango(rango: number): IChartContrato {
		let codeSearch = '1';
		let codeText = 'Adjudicado Provisionalmente';
		switch (rango) {
			case 2:
				codeSearch = '2';
				codeText = 'Adjudicado Definitivamente';
				break;
			case 4:
				codeSearch = '4';
				codeText = 'Desistimiento';
				break;
			case 5:
				codeSearch = '5';
				codeText = 'Renuncia';
				break;
			case 6:
				codeSearch = '6';
				codeText = 'Desierto Provisionalmente';
				break;
			case 7:
				codeSearch = '7';
				codeText = 'Desierto Definitivamente';
				break;
			case 8:
				codeSearch = '8';
				codeText = 'Adjudicado';
				break;
			case 9:
				codeSearch = '9';
				codeText = 'Formalizado';
				break;
			case 10:
				codeSearch = '10';
				codeText = 'Licitador mejor valorado:Requerimiento de documentacion';
				break;
		}
		// Static.TIPOS.find(x=>x.id==5);
		const rango1 = contratosmenoresJson.filter((item) => item.ResultCode === codeSearch);
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
