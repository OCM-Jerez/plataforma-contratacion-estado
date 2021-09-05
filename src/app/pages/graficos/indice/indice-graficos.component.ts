import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ChannelChartsService } from '../../../services/channel-charts.service';

@Component({
	selector: 'app-indice-graficos',
	templateUrl: './indice-graficos.component.html'
})
export class IndiceGraficosComponent {
	constructor(private router: Router, private _channelChartsService: ChannelChartsService) { }

	async graficosPorImporte() {
		const rangos = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
		const resolve = await this.router?.navigate(['/graficos']);

		if (resolve) {
			this._channelChartsService.enviarData({
				titulo1: 'Importe',
				titulo2: 'Importe acumulado',
				tituloPagina: 'En funcion de diferentes rangos del importe de la licitación.',
				rangos,
				tipoReporte: 'por importe'
			});
		}
	}

	async graficosPorProcedimiento() {
		const rangos = [999, 100, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
		const resolve = await this.router?.navigate(['/graficos']);
		if (resolve) {
			this._channelChartsService.enviarData({
				titulo1: 'ProcedureCode',
				titulo2: 'Importe acumulado',
				tituloPagina: 'Procedimiento por el que se realiza la adjudicación de los contratos.',
				rangos,
				tipoReporte: 'por procedure'
			});
		}
	}

	async graficosPorResultcode() {
		const rangos = [10, 9, 8, 7, 6, 5, 4, 2, 1];
		const resolve = await this.router?.navigate(['graficos']);
		if (resolve) {
			this._channelChartsService.enviarData({
				titulo1: 'ResultCode',
				titulo2: 'Importe acumulado',
				tituloPagina: 'Resultado de la licitación.',
				rangos,
				tipoReporte: 'por result'
			});
		}
	}

	async graficosPorTypecode() {
		const rangos = [50, 40, 32, 31, 22, 21, 8, 7, 3, 2, 1];
		const resolve = await this.router?.navigate(['/graficos']);
		if (resolve) {
			this._channelChartsService.enviarData({
				titulo1: 'TypeCode',
				titulo2: 'Importe acumulado',
				tituloPagina:
					'Tipología de los contratos delimitada por la legislación, en concreto por la Ley 9/2017.',
				rangos,
				tipoReporte: 'por type'
			});
		}
	}

	async graficosPorSubTypeCode() {
		const rangos = [
			27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
		];
		const resolve = await this.router?.navigate(['/graficos']);
		if (resolve) {
			this._channelChartsService.enviarData({
				titulo1: 'SubTypeCode',
				titulo2: 'Importe acumulado',
				tituloPagina: 'Subtipo de contrato.',
				rangos,
				tipoReporte: 'por subtype'
			});
		}
	}

	async graficosPorUrgencyCode() {
		const rangos = [3, 2, 1];
		const resolve = await this.router?.navigate(['/graficos']);
		if (resolve) {
			this._channelChartsService.enviarData({
				titulo1: 'UrgencyCode',
				titulo2: 'Importe acumulado',
				tituloPagina: 'Tipo de tramitación en función de la urgencia.',
				rangos,
				tipoReporte: 'por urgency'
			});
		}
	}

}
