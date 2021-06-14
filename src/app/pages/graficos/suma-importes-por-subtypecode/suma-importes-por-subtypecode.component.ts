/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component } from '@angular/core';

import * as agCharts from 'ag-charts-community';
import { IContratoMenor } from 'src/app/models/contratos.interfaces';
import contratosmenoresJson from '../../../../assets/data/contratosMenores2020map.json';
import { IChartContrato } from '../../../models/contratos.interfaces';
import { Static } from '../../../util/static';
@Component({
	selector: 'app-suma-importes-por-subtypecode',
	templateUrl: './suma-importes-por-subtypecode.component.html',
	styleUrls: ['./suma-importes-por-subtypecode.component.scss']
})
export class SumaImportesPorSubtypecodeComponent {
	public options: any;
	constructor() {
		this.generarDataImporte();
		this.options = {
			title: { text: 'Por SubTypeCode acumulado' },
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
			this.getDataRango(27),
			this.getDataRango(26),
			this.getDataRango(25),
			this.getDataRango(24),
			this.getDataRango(23),
			this.getDataRango(22),
			this.getDataRango(21),
			this.getDataRango(20),
			this.getDataRango(19),
			this.getDataRango(18),
			this.getDataRango(17),
			this.getDataRango(16),
			this.getDataRango(15),
			this.getDataRango(13),
			this.getDataRango(12),
			this.getDataRango(11),
			this.getDataRango(10),
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
		let _SubTypeCode = '1';
		let rangePayableAmount = 'Servicios de mantenimiento y reparación';
		switch (rango) {
			case 2:
				_SubTypeCode = '2';
				rangePayableAmount =
					'Servicios de transporte por vía terrestre, incluidos los servicios de furgones blindados y servicios de mensajería, excepto el transporte de correo';
				break;
			case 3:
				_SubTypeCode = '3';
				rangePayableAmount =
					'Servicios de transporte aéreo: transporte de pasajeros y carga, excepto el transporte de correo';
				break;
			case 4:
				_SubTypeCode = '4';
				rangePayableAmount = 'Transporte de correo por vía terrestre y por vía aérea';
				break;
			case 5:
				_SubTypeCode = '5';
				rangePayableAmount = 'Servicios de telecomunicación';
				break;
			case 6:
				_SubTypeCode = '6';
				rangePayableAmount =
					'Servicios financieros: a) servicios de seguros; b) servicios bancarios y de inversión';
				break;
			case 7:
				_SubTypeCode = '7';
				rangePayableAmount = 'Servicios de informática y servicios conexos';
				break;
			case 8:
				_SubTypeCode = '8';
				rangePayableAmount = 'Servicios de investigación y desarrollo';
				break;
			case 9:
				_SubTypeCode = '9';
				rangePayableAmount = 'ervicios de contabilidad, auditoría y teneduría de libros';
				break;
			case 10:
				_SubTypeCode = '10';
				rangePayableAmount =
					'Servicios de investigación de estudios y encuestas de la opinión pública';
				break;
			case 11:
				_SubTypeCode = '11';
				rangePayableAmount = 'Servicios de consultores de dirección y servicios conexos';
				break;
			case 12:
				_SubTypeCode = '12';
				rangePayableAmount = 'Servicios de arquitectura';
				break;
			case 13:
				_SubTypeCode = '13';
				rangePayableAmount =
					'Servicios de publicidad Servicios de limpieza de edificios y servicios de administración de bienes raíces';
				break;
			case 15:
				_SubTypeCode = '15';
				rangePayableAmount = 'Servicios editoriales y de imprenta, por tarifa o por contrato';
				break;
			case 16:
				_SubTypeCode = '16';
				rangePayableAmount =
					'Servicios de alcantarillado y eliminación de desperdicios: servicios de saneamiento y servicios similares';
				break;
			case 17:
				_SubTypeCode = '17';
				rangePayableAmount = 'Servicios de hostelería y restaurante';
				break;
			case 18:
				_SubTypeCode = '18';
				rangePayableAmount = 'Servicios de transporte por ferrocarril';
				break;
			case 19:
				_SubTypeCode = '19';
				rangePayableAmount = 'Servicios de transporte fluvial y marítimo';
				break;
			case 20:
				_SubTypeCode = '20';
				rangePayableAmount = 'Servicios de transporte complementarios y auxiliares';
				break;
			case 21:
				_SubTypeCode = '21';
				rangePayableAmount = 'Servicios jurídicos';
				break;
			case 22:
				_SubTypeCode = '22';
				rangePayableAmount = 'Servicios de colocación y suministro de personal';
				break;
			case 23:
				_SubTypeCode = '23';
				rangePayableAmount =
					'Servicios de investigación y seguridad, excepto los servicios de furgones blindados';
				break;
			case 24:
				_SubTypeCode = '24';
				rangePayableAmount = 'Servicios de educación y formación profesional';
				break;
			case 25:
				_SubTypeCode = '25';
				rangePayableAmount = 'Servicios sociales y de salud';
				break;
			case 26:
				_SubTypeCode = '26';
				rangePayableAmount = 'Servicios de esparcimiento, culturales y deportivos';
				break;
			case 27:
				_SubTypeCode = '27';
				rangePayableAmount = 'Otros servicios';
				break;
		}
		// Static.TIPOS.find(x=>x.id==5);
		const rango1 = contratosmenoresJson.filter((item) => item.SubTypeCode === _SubTypeCode);
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
