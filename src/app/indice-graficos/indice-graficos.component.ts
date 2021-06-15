/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-indice-graficos',
	templateUrl: './indice-graficos.component.html'
})
export class IndiceGraficosComponent {
	constructor(private router: Router) {}
	graficosPorImporte() {
		this.router?.navigate(['/graficosPorImporte']);
	}

	graficosPorProcedimiento() {
		this.router?.navigate(['/graficosPorProcedimiento']);
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
