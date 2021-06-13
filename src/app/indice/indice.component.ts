/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-indice',
	templateUrl: './indice.component.html',
	styleUrls: ['./indice.component.scss']
})
export class IndiceComponent {
	constructor(private router: Router) {}

	porLicitacion() {
		this.router?.navigate(['/porLicitacion']);
	}

	porAdjudicatario() {
		this.router?.navigate(['/porAdjudicatario']);
	}

	porCIF() {
		this.router?.navigate(['/porCIF']);
	}

	graficos() {
		this.router?.navigate(['/importe']);
	}
}
