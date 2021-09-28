import { ViewChild, AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from "@angular/forms";

import moment from 'moment';
import { DatePickerComponent, IDatePickerConfig } from 'ng2-date-picker';

import contratosmenoresJson from '../../assets/data/todosContratosHasta082021NoRepeat.json';
import licitacionesJson from '../../assets/data/todasLicitacionesHasta082021NoRepeat.json';
const contratosYlicitacionesJSON = [...contratosmenoresJson, ...licitacionesJson];

import { ChannelFilterDateService } from '../services/channel-filter-date.service';
import { ILicitacion } from '../models/contratos.interfaces';
import { ENTES_CONTRATACION } from '../../assets/data/entesContratacion-data';
import { IEntesContratacion } from '../models/entesContratacion.interface';

@Component({
	selector: 'app-indice',
	templateUrl: './indice.component.html',
	styleUrls: ['./indice.component.scss']
})
export class IndiceComponent implements AfterViewInit {
	isSubmitted = false;
	radioSel!: IEntesContratacion;
	radioSelected?: string;
	radioSelectedString?:
		string;
	entesList: IEntesContratacion[];
	config: IDatePickerConfig = { closeOnSelect: false, closeOnEnter: false, hideOnOutsideClick: false, locale: 'es', format: 'DD-MM-YYYY', firstDayOfWeek: 'mo' }
	@ViewChild('datePickerStart') datePickerStart!: DatePickerComponent;
	@ViewChild('datePickerEnd') datePickerEnd!: DatePickerComponent;

	dateStart!: Date;
	dateEnd!: Date;

	constructor(public fb: FormBuilder, private router: Router, private _channelFilterDateService: ChannelFilterDateService) {
		this.entesList = ENTES_CONTRATACION;
		this.radioSelected = "todos";
		this.getSelectedItem();
	}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.datePickerStart.api.open();
			this.datePickerEnd.api.open();
		}, 0);
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
		// public static TIPOS_PROCEDURE = [
		// 	{ id: 1, value: 'Abierto' },
		// 	{ id: 2, value: 'Restringido' },
		// 	{ id: 3, value: 'Negociado sin publicidad' },
		// 	{ id: 4, value: 'Negociado con publicidad' },
		// 	{ id: 5, value: 'Diálogo competitivo' },
		// 	{ id: 6, value: 'Contrato menor' },
		// 	{ id: 7, value: 'Derivado de acuerdo marco' },
		// 	{ id: 8, value: 'Concurso de proyectos' },
		// 	{ id: 9, value: 'Abierto simplificado' },
		// 	{ id: 10, value: 'Asociación para la innovación' },
		// 	{ id: 11, value: 'Basado en un sistema dinámico de adquisición' },
		// 	{ id: 100, value: 'Normas internas' },
		// 	{ id: 999, value: 'Otros' }
		// ];

		// public static TIPOS_TYPE = [
		// 	{ id: 1, value: 'Suministros' },
		// 	{ id: 2, value: 'Servicios' },
		// 	{ id: 3, value: 'Obras' },
		// 	{ id: 7, value: 'Administrativo especial' },
		// 	{ id: 8, value: 'Privado' },
		// 	{ id: 21, value: 'Gestión de Servicios Públicos' },
		// 	{ id: 22, value: 'Concesión de Servicios' },
		// 	{ id: 31, value: 'Concesión de Obras Públicas' },
		// 	{ id: 32, value: 'Concesión de Obras' },
		// 	{ id: 40, value: 'Colaboración entre el sector público y sector privado' },
		// 	{ id: 50, value: 'Patrimonial' }
		// ];

		let data = contratosYlicitacionesJSON as ILicitacion[]

		data = data.filter(item => {
			return item.ProcedureCode.match(/["6"]/)
		})

		data = data.filter(item => {
			return item.TypeCode.match(/["1","2"]/)
		})

		// data = data.filter(item => {
		// 	return item.TypeCode.match(/["3"]/)
		// })

		// data = data.filter(item => {
		// 	return item.TaxExclusiveAmount > 14000
		// })

		if (this.radioSel.value === 'todos') {
			localStorage.setItem('dataLicitacion', JSON.stringify(data))
		} else {
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

	}

	getSelectedItem() {
		this.radioSel = ENTES_CONTRATACION.find(Item => Item.value === this.radioSelected)!;
		this.radioSelectedString = JSON.stringify(this.radioSel);
	}

	onItemChange() {
		this.getSelectedItem();
	}

}
