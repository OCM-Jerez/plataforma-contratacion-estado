import { AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { DatePickerComponent, IDatePickerConfig } from 'ng2-date-picker';
import { ChannelFilterDateService } from '../services/channel-filter-date.service';
import contratosmenoresJson from '../../assets/data/todos.json';

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
	entesList: any[] | null = ENTES_CONTRATACION;

	config: IDatePickerConfig = { closeOnSelect: false, closeOnEnter: false, hideOnOutsideClick: false, locale: 'es', format: 'DD-MM-YYYY', firstDayOfWeek: 'mo' }
	@ViewChild('datePickerStart') datePickerStart!: DatePickerComponent;
	@ViewChild('datePickerEnd') datePickerEnd!: DatePickerComponent;

	dateStart!: Date;
	dateEnd!: Date;

	constructor(public fb: FormBuilder, private router: Router, private _channelFilterDateService: ChannelFilterDateService) {
		this.entesList = ENTES_CONTRATACION;
		this.radioSelected = "ayto";
		this.getSelecteditem();
	}

	ngAfterViewInit(): void {
		this.datePickerStart.api.open();
		this.datePickerEnd.api.open();
	}

	porLicitacion() {
		this.filterData();
		this.router?.navigate(['/porLicitacion']);
		// this._channelFilterDateService.sendDates({ startDate: this.dateStart, endDate: this.dateEnd })
	}

	porAdjudicatario() {
		this.router?.navigate(['/porAdjudicatario']);
	}

	porCIF() {
		this.router?.navigate(['/porCIF']);
	}

	graficos() {
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
			console.log(this.radioSel.label);
			return item.summary.match(this.radioSel.name)
		})

		localStorage.setItem('dataLicitacion', JSON.stringify(data))
	}

	getSelecteditem() {
		this.radioSel = ENTES_CONTRATACION.find(Item => Item.value === this.radioSelected);
		this.radioSelectedString = JSON.stringify(this.radioSel);
	}

	onItemChange() {
		this.getSelecteditem();
	}

}
