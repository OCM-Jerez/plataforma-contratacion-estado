/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component } from '@angular/core';

import * as agCharts from 'ag-charts-community';
import { IContratoMenor } from 'src/app/models/contratos.interfaces';
import contratosmenoresJson from '../../../../assets/data/contratosMenores2020map.json';
import { IChartContrato } from '../../../models/contratos.interfaces';
import { Static } from '../../../util/static';
@Component({
	selector: 'app-por-urgencycode',
	templateUrl: './por-urgencycode.component.html',
	styleUrls: ['./por-urgencycode.component.scss']
})
export class PorUrgencycodeComponent {
	public options: any;
	constructor() {
		this.generarDataImporte();
		this.options = {
			title: { text: 'Por UrgencyCode' },
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
		data.push(this.getDataRango(3), this.getDataRango(2), this.getDataRango(1));
		console.log(data);
		return data;
	}
	private getDataRango(rango: number): IChartContrato {
		let CodeSearch = '1';
		let rangePayableAmount = 'Ordinaria';
		switch (rango) {
			case 2:
				CodeSearch = '2';
				rangePayableAmount = 'Urgente';
				break;
			case 3:
				CodeSearch = '3';
				rangePayableAmount = 'Emergencia';
				break;
		}
		// Static.TIPOS.find(x=>x.id==5);
		const rango1 = contratosmenoresJson.filter((item) => item.UrgencyCode === CodeSearch);
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
