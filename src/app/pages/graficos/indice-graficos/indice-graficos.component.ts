/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelChartsService } from '../../../channel-charts.service';

@Component({
	selector: 'app-indice-graficos',
	templateUrl: './indice-graficos.component.html'
})
export class IndiceGraficosComponent {
	constructor(private router: Router, private _channelChartsService: ChannelChartsService) {}
	async graficosPorImporte() {
		const rangos = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

		const resolve = await this.router?.navigate(['/graficosPorImporte']);
		if (resolve) {
			this._channelChartsService.enviarData({
				titulo: 'Dermo',
				tituloPagina: 'por importe',
				rangos,
				tipoReporte: 'por importe'
			});
		}
	}

	async graficosPorProcedimiento() {
		const resolve = await this.router?.navigate(['/graficosPorProcedimiento']);
		const rangos = [999, 100, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

		if (resolve) {
			this._channelChartsService.enviarData({
				titulo: 'Por ProcedureCode',
				tituloPagina: 'por procedure',
				rangos,
				tipoReporte: 'por procedure'
			});
		}
	}

	graficosPorResultcode() {
		this.router?.navigate(['/graficosPorResultcode']);
	}

	graficosPorTypecode() {
		this.router?.navigate(['/graficosPorTypecode']);
	}

	graficosPorSubTypeCode() {
		this.router?.navigate(['/graficosPorSubTypeCode']);
	}

	graficosPorUrgencyCode() {
		this.router?.navigate(['/graficosPorUrgencyCode']);
	}
}
