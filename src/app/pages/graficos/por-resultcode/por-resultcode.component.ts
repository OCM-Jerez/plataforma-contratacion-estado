/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component } from '@angular/core';

import * as agCharts from 'ag-charts-community';
import { IContratoMenor } from 'src/app/models/contratos.interfaces';
import contratosmenoresJson from '../../../../assets/data/contratosMenores2020map.json';
import { IChartContrato } from '../../../models/contratos.interfaces';
import { Static } from '../../../util/static';
@Component({
	selector: 'app-por-resultcode',
	templateUrl: './por-resultcode.component.html',
	styleUrls: ['./por-resultcode.component.scss']
})
export class PorResultcodeComponent {
	public options: any;
	constructor() {
		this.generarDataImporte();
		this.options = {
			title: { text: 'Por resulCode' },
			// subtitle: { text: 'in billion U.S. dollars' },
			legend: { enabled: false },
			data: this.generarDataImporte(),
			series: [
				{
					type: 'bar',
					xKey: 'rangePayableAmount',
					yKeys: ['contratos'],
					yNames: ['Nº contratos'],
					formatter: () => ({
						fill: ['#0075CD']
					}),
					label: {
						color: 'red',
						fontWeight: 'bold',
						formatter: function (params: any) {
							// eslint-disable-next-line @typescript-eslint/no-unsafe-return
							return params.value === undefined ? '' : params.value.toFixed(0);
						}
					}
				}
			],
			axes: [
				{
					type: 'number',
					position: 'bottom'
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
		let _TypeCode = '1';
		let rangePayableAmount = 'Adjudicado Provisionalmente';
		switch (rango) {
			case 2:
				_TypeCode = '2';
				rangePayableAmount = 'Adjudicado Definitivamente';
				break;
			case 4:
				_TypeCode = '4';
				rangePayableAmount = 'Desistimiento';
				break;
			case 5:
				_TypeCode = '5';
				rangePayableAmount = 'Renuncia';
				break;
			case 6:
				_TypeCode = '6';
				rangePayableAmount = 'Desierto Provisionalmente';
				break;
			case 7:
				_TypeCode = '7';
				rangePayableAmount = 'Desierto Definitivamente';
				break;
			case 8:
				_TypeCode = '8';
				rangePayableAmount = 'Adjudicado';
				break;
			case 9:
				_TypeCode = '9';
				rangePayableAmount = 'Formalizado';
				break;
			case 10:
				_TypeCode = '10';
				rangePayableAmount = 'Licitador mejor valorado:Requerimiento de documentacion';
				break;
		}
		// Static.TIPOS.find(x=>x.id==5);
		const rango1 = contratosmenoresJson.filter((item) => item.TypeCode === _TypeCode);
		let suma = 0;
		rango1.forEach((x) => {
			suma = suma + x.TaxExclusiveAmount1;
		});

		const itemRango: IChartContrato = {
			rangePayableAmount,
			contratos: rango1.length,
			sumPayableAmount: suma
		};
		return itemRango;
	}
}
