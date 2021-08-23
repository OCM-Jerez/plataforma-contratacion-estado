import { AfterViewInit, ViewChild } from '@angular/core';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { DatePickerComponent, IDatePickerConfig } from 'ng2-date-picker';
import { ChannelFilterDateService } from '../services/channel-filter-date.service';
import contratosmenoresJson from '../../assets/data/todos.json';
import { ILicitacion } from '../models/contratos.interfaces';

@Component({
	selector: 'app-indice',
	templateUrl: './indice.component.html',
	styleUrls: ['./indice.component.scss']
})
export class IndiceComponent implements AfterViewInit {
	constructor(private router: Router, private _channelFilterDateService: ChannelFilterDateService) { }


	config: IDatePickerConfig = { closeOnSelect: false, closeOnEnter: false, hideOnOutsideClick: false, locale: 'es', format: 'DD-MM-YYYY', firstDayOfWeek: 'mo' }
	@ViewChild('datePickerStart') datePickerStart!: DatePickerComponent;
	@ViewChild('datePickerEnd') datePickerEnd!: DatePickerComponent;

	dateStart!: Date;
	dateEnd!: Date;

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
		localStorage.setItem('dataLicitacion', JSON.stringify(data))

	}
}
