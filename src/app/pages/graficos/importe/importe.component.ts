/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component } from '@angular/core';

import * as agCharts from 'ag-charts-community';
import { IContratoMenor } from 'src/app/models/contratos.interfaces';
import contratosmenoresJson from '../../../../assets/data/contratosMenores2020map.json';
import { IChartContrato } from '../../../models/contratos.interfaces';
import { Static } from '../../../util/static';
@Component({
	selector: 'app-importe',
	templateUrl: './importe.component.html',
	styleUrls: ['./importe.component.scss']
})
export class ImporteComponent {
	public options: any;
	revenueData = [
		{
			quarter: "Q1'18",
			iphone: 140,
			mac: 16,
			ipad: 14,
			wearables: 12,
			services: 20
		},
		{
			quarter: "Q2'18",
			iphone: 124,
			mac: 20,
			ipad: 14,
			wearables: 12,
			services: 30
		},
		{
			quarter: "Q3'18",
			iphone: 112,
			mac: 20,
			ipad: 18,
			wearables: 14,
			services: 36
		},
		{
			quarter: "Q4'18",
			iphone: 118,
			mac: 24,
			ipad: 14,
			wearables: 14,
			services: 36
		},
		{
			quarter: "Q1'19",
			iphone: 124,
			mac: 18,
			ipad: 16,
			wearables: 18,
			services: 26
		},
		{
			quarter: "Q2'19",
			iphone: 108,
			mac: 20,
			ipad: 16,
			wearables: 18,
			services: 40
		},
		{
			quarter: "Q3'19",
			iphone: 96,
			mac: 22,
			ipad: 18,
			wearables: 24,
			services: 42
		},
		{
			quarter: "Q4'19",
			iphone: 104,
			mac: 22,
			ipad: 14,
			wearables: 20,
			services: 40
		}
	];

	pruebaData = [
		{
			rango: '10.000 - 15.000',
			contratos: 37
		},
		{
			rango: '5.0000 - 10.000',
			contratos: 20
		},
		{
			rango: '1.000 - 5.000',
			contratos: 80
		},

		{
			rango: '0 - 1.000',
			contratos: 45
		}
	];

	constructor() {
		this.generarDataImporte();
		this.options = {
			title: { text: 'DISTRIBUCIÓN POR IMPORTES' },
			// subtitle: { text: 'in billion U.S. dollars' },
			// data: this.revenueData,
			// data: dataJSON,
			data: this.generarDataImporte(),
			// series: [
			// 	{
			// 		type: 'bar',
			// 		xKey: 'quarter',
			// 		yKeys: ['iphone'],
			// 		yNames: ['iPhone AAAAAA']
			// 	}
			// ],
			// axes: [
			// 	{
			// 		type: 'number',
			// 		position: 'bottom'
			// 	},
			// 	{
			// 		type: 'category',
			// 		position: 'left'
			// 	}
			// ]
			series: [
				{
					type: 'bar',
					xKey: 'rangePayableAmount',
					yKeys: ['contratos'],
					yNames: ['Nº contratos'],
					formatter: () => ({
						fill: ['#0075CD']
					})
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
			this.getDataRango(1),
			this.getDataRango(2),
			this.getDataRango(3),
			this.getDataRango(4),
			this.getDataRango(5)
		);
		return data;
	}
	private getDataRango(rango: number): IChartContrato {
		let rangoInicial = 0;
		let rangoFinal = 999;
		let rangePayableAmount = '0 - 1.000';
		switch (rango) {
			case 2:
				rangoInicial = 1000;
				rangoFinal = 4999;
				rangePayableAmount = '1.000 - 5.000';
				break;

			case 3:
				rangoInicial = 5000;
				rangoFinal = 9999;
				rangePayableAmount = '5.000 - 10.000';
				break;
			case 4:
				rangoInicial = 10000;
				rangoFinal = 14999;
				rangePayableAmount = '10.000 - 15.000';
				break;
			case 5:
				rangoInicial = 15000;
				rangoFinal = 45000;
				rangePayableAmount = '15.000 - 45.000';
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

// const rangePayableAmount = [
// 	{
// 		rangePayableAmount: '10.000 - 15.000',
// 		contratos: 37,
// 		sumPayableAmount: 256245
// 	},
// 	{
// 		rangePayableAmount: '5.0000 - 10.000',
// 		contratos: 20,
// 		sumPayableAmount: 156345
// 	},
// 	{
// 		rangePayableAmount: '1.000 - 5.000',
// 		contratos: 80,
// 		sumPayableAmount: 45879
// 	},

// 	{
// 		rangePayableAmount: '0 - 1.000',
// 		contratos: 45,
// 		sumPayableAmount: 125487
// 	}
// ];
