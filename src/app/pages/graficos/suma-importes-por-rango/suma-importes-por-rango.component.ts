/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component } from '@angular/core';

import * as agCharts from 'ag-charts-community';
import { IContratoMenor } from 'src/app/models/contratos.interfaces';
import contratosmenoresJson from '../../../../assets/data/contratosMenores2020map.json';
import { IChartContrato } from '../../../models/contratos.interfaces';
import { Static } from '../../../util/static';
@Component({
	selector: 'app-suma-importes-por-rango',
	templateUrl: './suma-importes-por-rango.component.html',
	styleUrls: ['./suma-importes-por-rango.component.scss']
})
export class SumaImportesPorRangoComponent {
	public options: any;
	constructor() {
		this.generarDataImporte();
		this.options = {
			title: { text: 'Suma de importes de contratos por rango de importe.' },
			// subtitle: { text: 'in billion U.S. dollars' },
			padding: {
				top: 40,
				right: 50,
				bottom: 40,
				left: 40
			},
			legend: { enabled: false, spacing: 40 },
			data: this.generarDataImporte(),
			series: [
				{
					type: 'bar',
					xKey: 'rangePayableAmount',
					yKeys: ['sumPayableAmount'],
					yNames: ['Suma importes'],
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
		let rangoInicial = 0;
		let rangoFinal = 99;
		let rangePayableAmount = '0 - 100';
		switch (rango) {
			case 2:
				rangoInicial = 100;
				rangoFinal = 499;
				rangePayableAmount = '100 - 500';
				break;
			case 3:
				rangoInicial = 500;
				rangoFinal = 999;
				rangePayableAmount = '500 - 1.000';
				break;
			case 4:
				rangoInicial = 1000;
				rangoFinal = 1999;
				rangePayableAmount = '1.000 - 2.000';
				break;
			case 5:
				rangoInicial = 2000;
				rangoFinal = 2999;
				rangePayableAmount = '2.000 - 3.000';
				break;
			case 6:
				rangoInicial = 3000;
				rangoFinal = 3999;
				rangePayableAmount = '3.000 - 4.000';
				break;
			case 7:
				rangoInicial = 4000;
				rangoFinal = 4999;
				rangePayableAmount = '4.000 - 5.000';
				break;
			case 8:
				rangoInicial = 5000;
				rangoFinal = 9999;
				rangePayableAmount = '5.000 - 10.000';
				break;
			case 9:
				rangoInicial = 10000;
				rangoFinal = 13999;
				rangePayableAmount = '10.000 - 14.000';
				break;
			case 10:
				rangoInicial = 14000;
				rangoFinal = 14999;
				rangePayableAmount = '14.000 - 15.000';
				break;
			case 11:
				rangoInicial = 15000;
				rangoFinal = 24999;
				rangePayableAmount = '15.000 - 25.000';
				break;
			case 12:
				rangoInicial = 25000;
				rangoFinal = 34999;
				rangePayableAmount = '25.000 - 35.000';
				break;
			case 13:
				rangoInicial = 35000;
				rangoFinal = 45000;
				rangePayableAmount = '35.000 - 45.000';
				break;
		}
		// Static.TIPOS.find(x=>x.id==5);
		const rango1 = contratosmenoresJson.filter(
			(item) => item.TaxExclusiveAmount1 >= rangoInicial && item.TaxExclusiveAmount1 <= rangoFinal
		);
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
