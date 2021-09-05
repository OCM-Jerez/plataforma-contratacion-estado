import { ViewChild, AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from "@angular/forms";

import moment from 'moment';
import { DatePickerComponent, IDatePickerConfig } from 'ng2-date-picker';

import contratosmenoresJson from '../../assets/data/2108todasLicitacionesContratosNoRepeat.json';

import { ChannelFilterDateService } from '../services/channel-filter-date.service';
import { ILicitacion } from '../models/contratos.interfaces';
import { ENTES_CONTRATACION } from '../../assets/data/entesContratacion-data';

@Component({
	selector: 'app-indice',
	templateUrl: './indice.component.html',
	styleUrls: ['./indice.component.scss']
})
export class IndiceComponent implements AfterViewInit {
	isSubmitted = false;
	radioSel: any;
	radioSelected?: string;
	radioSelectedString?: string;
	// TODO! ¿Qué tipo podria ser para evitar any?
	// TODO! No entiedo la parte => | null = ENTES_CONTRATACION
	// Todo! ¿Por qué no puedo asignar aqui = ENTES_CONTRATACION y hay que hacerlo en el constructor()?
	entesList: any[] | null = ENTES_CONTRATACION;

	config: IDatePickerConfig = { closeOnSelect: false, closeOnEnter: false, hideOnOutsideClick: false, locale: 'es', format: 'DD-MM-YYYY', firstDayOfWeek: 'mo' }
	@ViewChild('datePickerStart') datePickerStart!: DatePickerComponent;
	@ViewChild('datePickerEnd') datePickerEnd!: DatePickerComponent;

	dateStart!: Date;
	dateEnd!: Date;

	constructor(public fb: FormBuilder, private router: Router, private _channelFilterDateService: ChannelFilterDateService) {
		this.entesList = ENTES_CONTRATACION;
		this.radioSelected = "ayto";
		this.getSelectedItem();
	}

	ngAfterViewInit(): void {
		this.datePickerStart.api.open();
		this.datePickerEnd.api.open();
	}

	porLicitacion() {
		this.filterData();
		this.router?.navigate(['/porLicitacion']);
	}

	porAdjudicatario() {
		this.filterData();
		this.router?.navigate(['/porAdjudicatario']);
	}

	graficos() {
		this.filterData();
		this.router?.navigate(['/indiceGraficos']);
	}

	changeDatePickerStart(value: any): void {
		this.dateStart = this._getDate(value)
	}

	changeDatePickerEnd(value: any): void {
		this.dateEnd = this._getDate(value)
	}

	private _getDate(momentValue: any): Date {
		return moment(momentValue).toDate();
	}

	private filterData() {
		let data = contratosmenoresJson as ILicitacion[]

		if (this.dateStart && this.dateEnd) {
			data = data.filter(item => {
				const updated = moment(item.updated).toDate();
				return updated >= this.dateStart && updated <= this.dateEnd
			})
		}

		data = data.filter(item => {
			return item.summary.match(this.radioSel.name)
		})

		localStorage.setItem('dataLicitacion', JSON.stringify(data))
	}

	getSelectedItem() {
		this.radioSel = ENTES_CONTRATACION.find(Item => Item.value === this.radioSelected);
		this.radioSelectedString = JSON.stringify(this.radioSel);
	}

	onItemChange() {
		this.getSelectedItem();
	}

}
