import { ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from "@angular/forms";

import moment from 'moment';
import { DatePickerComponent, IDatePickerConfig } from 'ng2-date-picker';

// import contratosmenoresJson from '../../assets/data/todosContratosHasta082021NoRepeat.json';
// import licitacionesJson from '../../assets/data/todasLicitacionesHasta082021NoRepeat.json';
// const contratosYlicitacionesJSON = [...contratosmenoresJson, ...licitacionesJson];

import contratosYlicitacionesJSON from '../../assets/data/contratosYlicitaciones082021.json';


import { ChannelFilterDateService } from '../services/channel-filter-date.service';
import { ILicitacion } from '../models/contratos.interfaces';
import { ENTES_CONTRATACION } from '../../assets/data/entesContratacion-data';
import { IEntesContratacion } from '../models/entesContratacion.interface';
import { Static } from '../util/static';

@Component({
	selector: 'app-indice',
	templateUrl: './indice.component.html',
	styleUrls: ['./indice.component.scss']
})
export class IndiceComponent implements AfterViewInit, OnInit {
	isSubmitted = false;
	radioSel!: IEntesContratacion;
	radioSelected?: string;
	radioSelectedString?: string;
	entesList: IEntesContratacion[];
	typeProcedureListChecked: IProcedureChecked[] = [];

	config: IDatePickerConfig = { closeOnSelect: false, closeOnEnter: false, hideOnOutsideClick: false, locale: 'es', format: 'DD-MM-YYYY', firstDayOfWeek: 'mo' }
	@ViewChild('datePickerStart') datePickerStart!: DatePickerComponent;
	@ViewChild('datePickerEnd') datePickerEnd!: DatePickerComponent;

	dateStart!: Date;
	dateEnd!: Date;

	rangeInit = 0;
	rangeEnd = 0;

	constructor(public fb: FormBuilder, private router: Router, private _channelFilterDateService: ChannelFilterDateService) {
		this.entesList = ENTES_CONTRATACION;
		this.radioSelected = "todos";
		this.getSelectedItem();
	}
	ngOnInit(): void {
		this._loadProcedureCheckedList()
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

	changeProcedure(item: IProcedureChecked, checked: boolean) {
		this.typeProcedureListChecked[0].disabled = false
		item.checked = checked;

		const listCheckedFalse = this.typeProcedureListChecked.filter(item => item.checked === false);
		const listCheckedTrue = this.typeProcedureListChecked.filter(item => item.checked === true);

		if (listCheckedFalse.length > 0 && listCheckedFalse.length === this.typeProcedureListChecked.length) {
			this.typeProcedureListChecked[0].checked = true;
		} else if (listCheckedTrue.length > 1) {
			this.typeProcedureListChecked[0].checked = false;
			this.typeProcedureListChecked[0].disabled = true
		}

	}

	private _loadProcedureCheckedList() {
		this.typeProcedureListChecked.push({ id: 0, value: 'Todos', checked: true })
		Static.TIPOS_PROCEDURE.forEach(item => {
			this.typeProcedureListChecked.push(
				{
					id: item.id,
					value: item.value,
					checked: false
				}
			)
		});
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
		console.log('NO filter: ', data.length);

		const list = this.typeProcedureListChecked.filter(item => item.id !== 0 && item.checked);
		if (list.length > 0) {
			data = data.filter(item => {
				const value = Number(item.ProcedureCode);
				const existe = list.find(item => item.id === value)
				return existe !== undefined;
			})
		}
		// data = data.filter(item => {
		// 	return item.ProcedureCode.match(/["6"]/)
		// })

		data = data.filter(item => {
			return item.TypeCode.match(/["1","2"]/)
		})

		// data = data.filter(item => {
		// 	return item.TypeCode.match(/["3"]/)
		// })

		// data = data.filter(item => {
		// 	return item.TaxExclusiveAmount > 14000
		// })
		console.log('data filter: ', data.length);

		if (this.radioSel.value === 'todos') {
			data = this.filterRange(data);
			data = this._filterDate(data);
			localStorage.setItem('dataLicitacion', JSON.stringify(data))
		} else {
			data = this.filterRange(data);
			data = this._filterDate(data);

			data = data.filter(item => {
				return item.summary.match(this.radioSel.name)
			})

			localStorage.setItem('dataLicitacion', JSON.stringify(data))
		}

	}
	private filterRange(data: ILicitacion[]): ILicitacion[] {
		if (this.rangeEnd > 0 && this.rangeInit > 0) {
			data = data.filter(item => item.TaxExclusiveAmount >= this.rangeInit && item.TaxExclusiveAmount <= this.rangeEnd)
		} else if (this.rangeInit > 0) {
			data = data.filter(item => item.TaxExclusiveAmount >= this.rangeInit)
		} else if (this.rangeEnd > 0) {
			data = data.filter(item => item.TaxExclusiveAmount <= this.rangeEnd)
		}
		return data
	}

	private _filterDate(data: ILicitacion[]): ILicitacion[] {
		if (this.dateStart && this.dateEnd) {
			return data.filter(item => {
				const updated = moment(item.updated).toDate();
				return updated >= this.dateStart && updated <= this.dateEnd
			})
		}
		return data;
	}

	getSelectedItem() {
		this.radioSel = ENTES_CONTRATACION.find(Item => Item.value === this.radioSelected)!;
		this.radioSelectedString = JSON.stringify(this.radioSel);
	}

	onItemChange() {
		this.getSelectedItem();
	}

}

interface IProcedureChecked {
	id: number,
	value: string,
	checked: boolean,
	disabled?: boolean
}