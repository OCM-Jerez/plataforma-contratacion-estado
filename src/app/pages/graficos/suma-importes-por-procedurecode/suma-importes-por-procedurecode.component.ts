/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component } from '@angular/core';

import * as agCharts from 'ag-charts-community';
import { IContratoMenor } from 'src/app/models/contratos.interfaces';
import contratosmenoresJson from '../../../../assets/data/contratosMenores2020map.json';
import { IChartContrato } from '../../../models/contratos.interfaces';
import { Static } from '../../../util/static';
@Component({
	selector: 'app-suma-importes-por-procedurecode',
	templateUrl: './suma-importes-por-procedurecode.component.html',
	styleUrls: ['./suma-importes-por-procedurecode.component.scss']
})
export class SumaImportesPorProcedurecodeComponent {
	public options: any;
	constructor() {
		this.generarDataImporte();
		this.options = {
			title: { text: 'Por ProcedureCode acumulado' },
			// subtitle: { text: 'in billion U.S. dollars' },
			legend: { enabled: false },
			data: this.generarDataImporte(),
			series: [
				{
					type: 'bar',
					xKey: 'rangePayableAmount',
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
		let _TypeCode = '1';
		let rangePayableAmount = 'Abierto';
		switch (rango) {
			case 2:
				_TypeCode = '2';
				rangePayableAmount = 'Restringido';
				break;
			case 3:
				_TypeCode = '3';
				rangePayableAmount = 'Negociado sin publicidad';
				break;
			case 4:
				_TypeCode = '4';
				rangePayableAmount = 'Negociado con publicidad';
				break;
			case 5:
				_TypeCode = '5';
				rangePayableAmount = 'Diálogo competitivo';
				break;
			case 6:
				_TypeCode = '6';
				rangePayableAmount = 'Contrato menor';
				break;
			case 7:
				_TypeCode = '7';
				rangePayableAmount = 'Derivado de acuerdo marco';
				break;
			case 8:
				_TypeCode = '8';
				rangePayableAmount = 'Concurso de proyectos';
				break;
			case 9:
				_TypeCode = '9';
				rangePayableAmount = 'Abierto simplificado';
				break;
			case 10:
				_TypeCode = '10';
				rangePayableAmount = 'Asociación para la innovación';
				break;
			case 11:
				_TypeCode = '11';
				rangePayableAmount = 'Derivado de asociación para la innovación';
				break;
			case 12:
				_TypeCode = '12';
				rangePayableAmount = ' Basado en un sistema dinámico de adquisición';
				break;
			case 13:
				_TypeCode = '13';
				rangePayableAmount = 'Licitación con negociación';
				break;
			case 100:
				_TypeCode = '100';
				rangePayableAmount = 'Normas internas';
				break;
			case 999:
				_TypeCode = '999';
				rangePayableAmount = 'Otros';
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
