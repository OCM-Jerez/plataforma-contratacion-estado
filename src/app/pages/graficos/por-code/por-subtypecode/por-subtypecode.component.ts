/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component } from '@angular/core';

import * as agCharts from 'ag-charts-community';
import { IContratoMenor } from 'src/app/models/contratos.interfaces';
import contratosmenoresJson from '../../../../../assets/data/contratosMenores2020map.json';
import { IChartContrato } from '../../../../models/contratos.interfaces';
import { Static } from '../../../../util/static';
@Component({
	selector: 'app-por-subtypecode',
	templateUrl: './por-subtypecode.component.html'
})
export class PorSubtypecodeComponent {
	public options: any;
	constructor() {
		this.generarDataImporte();
		this.options = {
			title: { text: 'Por SubTypeCode' },
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
		let codeSearch = '1';
		let codeText = 'Servicios de mantenimiento y reparación';
		switch (rango) {
			case 2:
				codeSearch = '2';
				codeText = 'Servicios de transporte por vía terrestre...';
				// 'Servicios de transporte por vía terrestre, incluidos los servicios de furgones blindados y servicios de mensajería, excepto el transporte de correo';
				break;
			case 3:
				codeSearch = '3';
				codeText = 'Servicios de transporte aéreo...';
				// 'Servicios de transporte aéreo: transporte de pasajeros y carga, excepto el transporte de correo';
				break;
			case 4:
				codeSearch = '4';
				codeText = 'Transporte de correo por vía terrestre y por vía aérea';
				break;
			case 5:
				codeSearch = '5';
				codeText = 'Servicios de telecomunicación';
				break;
			case 6:
				codeSearch = '6';
				codeText = 'Servicios financieros...';
				// 'Servicios financieros: a) servicios de seguros; b) servicios bancarios y de inversión';
				break;
			case 7:
				codeSearch = '7';
				codeText = 'Servicios de informática y servicios conexos';
				break;
			case 8:
				codeSearch = '8';
				codeText = 'Servicios de investigación y desarrollo';
				break;
			case 9:
				codeSearch = '9';
				codeText = 'Servicios de contabilidad, auditoría...';
				// codeText = 'Servicios de contabilidad, auditoría y teneduría de libros';
				break;
			case 10:
				codeSearch = '10';
				codeText = 'Servicios de investigación de estudios ....';
				// codeText = 'Servicios de investigación de estudios y encuestas de la opinión pública';
				break;
			case 11:
				codeSearch = '11';
				codeText = 'Servicios de consultores de dirección y servicios conexos';
				break;
			case 12:
				codeSearch = '12';
				codeText = 'Servicios de arquitectura';
				break;
			case 13:
				codeSearch = '13';
				codeText = 'Servicios de publicidad Servicios de limpieza de edificios...';
				// 'Servicios de publicidad Servicios de limpieza de edificios y servicios de administración de bienes raíces';
				break;
			case 15:
				codeSearch = '15';
				codeText = 'Servicios editoriales y de imprenta, por tarifa o por contrato';
				break;
			case 16:
				codeSearch = '16';
				codeText = 'Servicios de alcantarillado y eliminación de desperdicios....';
				// 'Servicios de alcantarillado y eliminación de desperdicios: servicios de saneamiento y servicios similares';
				break;
			case 17:
				codeSearch = '17';
				codeText = 'Servicios de hostelería y restaurante';
				break;
			case 18:
				codeSearch = '18';
				codeText = 'Servicios de transporte por ferrocarril';
				break;
			case 19:
				codeSearch = '19';
				codeText = 'Servicios de transporte fluvial y marítimo';
				break;
			case 20:
				codeSearch = '20';
				codeText = 'Servicios de transporte complementarios y auxiliares';
				break;
			case 21:
				codeSearch = '21';
				codeText = 'Servicios jurídicos';
				break;
			case 22:
				codeSearch = '22';
				codeText = 'Servicios de colocación y suministro de personal';
				break;
			case 23:
				codeSearch = '23';
				codeText = 'Servicios de investigación y seguridad...';
				// 'Servicios de investigación y seguridad, excepto los servicios de furgones blindados';
				break;
			case 24:
				codeSearch = '24';
				codeText = 'Servicios de educación y formación profesional';
				break;
			case 25:
				codeSearch = '25';
				codeText = 'Servicios sociales y de salud';
				break;
			case 26:
				codeSearch = '26';
				codeText = 'Servicios de esparcimiento, culturales y deportivos';
				break;
			case 27:
				codeSearch = '27';
				codeText = 'Otros servicios';
				break;
		}
		// Static.TIPOS.find(x=>x.id==5);
		const rango1 = contratosmenoresJson.filter((item) => item.SubTypeCode === codeSearch);
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
