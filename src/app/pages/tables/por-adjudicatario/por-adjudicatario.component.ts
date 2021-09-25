import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import { GridOptions } from 'ag-grid-community/main';
import moment from 'moment';

import { CellRendererOCM } from '../../../ag-grid/CellRendererOCM';
import localeTextESPes from '../../../../assets/data/localeTextESPes.json';
import { ILicitacion, IData, IDetail } from 'src/app/models/contratos.interfaces';

@Component({
	selector: 'app-por-adjudicatario',
	templateUrl: './por-adjudicatario.component.html'
})
export class PorAdjudicatarioComponent {
	@ViewChild('agGrid', { static: false })
	agGrid!: AgGridAngular;
	private gridApi: any;
	public gridColumnApi: any;
	public columnDefs: any;
	public defaultColDef: any;
	public gridOptions: GridOptions;
	public groupHeaderHeight = 25;
	public headerHeight = 25;
	public localeText;
	public rowData: any;
	public isExpanded = false;
	public rowHeight = 50;
	detailCellRendererParams: any;

	constructor() {
		this.gridOptions = {} as GridOptions;
		this.localeText = localeTextESPes;
		this.defaultColDef = {
			// flex: 1,
			sortable: true,
			resizable: true,
			filter: true
		};

		this.columnDefs = [
			{
				headerName: 'Empresa adjudicataria',
				field: 'PartyName',
				width: 400,
				cellRenderer: 'agGroupCellRenderer',
			},
			{
				headerName: 'CIF',
				field: 'PartyIdentification',
				width: 400,
			},
		];

		this.detailCellRendererParams = {
			detailGridOptions: {
				rowSelection: 'multiple',
				suppressRowClickSelection: true,
				enableRangeSelection: true,
				pagination: false,
				paginationAutoPageSize: false,
				columnDefs: [
					{
						headerName: 'Fecha',
						field: 'updated',
						width: 130,
						sortable: true,
						filter: true,
						cellRenderer: 'agGroupCellRenderer',
						valueFormatter: (params: any) => {
							return moment(moment(params.data.updated).toDate()).format('DD-MM-YYYY')
						}
					},
					{
						headerName: 'Referencia',
						field: 'ContractFolderID',
						width: 140
					},
					{
						headerName: 'Descripción',
						field: 'Name',
						width: 900,
						wrapText: true,
						autoHeight: true,
						resizable: true,
						filter: true,
					},
					{
						headerName: 'Importe',
						field: 'TotalAmount',
						width: 120,
						sortable: true,
						filter: true,
						aggFunc: 'sum',
						cellRenderer: CellRendererOCM,
					},
				],
			},
			getDetailRowData: function (params: any) {
				params.successCallback(params.data.detail);
			},
		};
	}

	onGridReady(params: { api: any; columnApi: any }) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		this.rowData = this.generateData();
	}

	private generateData(): IData[] {
		const dataLocalStorage = localStorage.getItem('dataLicitacion')
		const dataLicitacion = JSON.parse(dataLocalStorage!) as ILicitacion[];
		let data: IData[] = [];

		dataLicitacion.forEach(item => {
			if (item.arrayTenderResult) {
				item.arrayTenderResult.forEach(tender => {
					const dataFinal: IData = {
						PartyName: tender.PartyName,
						PartyIdentification: tender.PartyIdentification,
					}
					data.push(dataFinal)
				})
			}
		})
		const set = new Set();
		data = data.filter(item => {
			const duplicate = set.has(item.PartyName);
			set.add(item.PartyName);
			return !duplicate;
		}).sort((a, b) => {
			if (a.PartyName < b.PartyName) { return -1 }
			if (a.PartyName > b.PartyName) { return 1 }
			return 0
		});

		data.forEach(item => {
			const licitaciones: IDetail[] = [];
			dataLicitacion.forEach(licitacion => {
				if (licitacion.arrayTenderResult) {
					const findTender = licitacion.arrayTenderResult.find(tender => tender.PartyName === item.PartyName);
					if (findTender) {
						const detail: IDetail = { updated: licitacion.updated, Name: licitacion.Name, ContractFolderID: licitacion.ContractFolderID, TotalAmount: licitacion.TotalAmount }
						licitaciones.push(detail);
					}
				}
			})
			item.detail = licitaciones;
		})
		return data;
	}
}

