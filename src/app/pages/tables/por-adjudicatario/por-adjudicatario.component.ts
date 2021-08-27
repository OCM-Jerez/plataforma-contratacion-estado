import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import { GridOptions } from 'ag-grid-community/main';

import { CellRendererOCM } from '../../../util/CellRendererOCM';
import localeTextESPes from '../../../../assets/data/localeTextESPes.json';
import { ILicitacion } from 'src/app/models/contratos.interfaces';

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
		this.columnDefs = [
			{
				children: [
					{
						headerName: 'Adjudicatario',
						field: 'PartyName',
						width: 350,
						rowGroup: true,
						filter: false,
						pinned: 'left',
						showRowGroup: 'PartyName',
						cellRenderer: 'agGroupCellRenderer',
						valueGetter: (params: any) => {
							if (params.data) {
								return `${params.data.PartyName}      ${params.data.PartyIdentification}`;
							} else {
								return null;
							}
						},
						cellRendererParams: {
							innerRenderer: (params: { node: { group: any }; value: any }) => {
								if (params.node.group) {
									return params.value;
								} else {
									return '';
								}
							},
							footerValueGetter(params: { value: string; node: { level: any } }) {
								switch (params.node.level) {
									case 0: // Total adjudicatario.
										return `<span style="color: red; font-size: 10px;  font-weight: bold; margin-left: 0px;"> Total ${params.value}</span>`;
									case -1: // Total general.
										return '';
									default:
										return 'SIN FORMATO';
								}
							}
						}
					},
					{
						headerName: 'Fecha',
						field: 'AwardDate',
						width: 90,
						resizable: true,
						pinned: 'left',
						suppressCount: true
					},
					{
						headerName: 'Descripción',
						field: 'Name',
						width: 850,
						resizable: true,
						rowGroup: false,
						filter: false,
						pinned: 'left',
						wrapText: true
					},
					{
						headerName: 'TOTAL',
						field: 'TaxExclusiveAmount',
						width: 88,
						resizable: true,
						rowGroup: false,
						filter: false,
						pinned: 'left',
						showRowGroup: 'TaxExclusiveAmount',
						cellRenderer: CellRendererOCM
					}
				]
			},
			{
				headerName: 'Parcial',
				field: 'TaxExclusiveAmount1',
				width: 80,
				resizable: true,
				aggFunc: 'sum',
				cellRenderer: CellRendererOCM
			}
		];

		this.gridOptions = {} as GridOptions;
		this.localeText = localeTextESPes;
		this.defaultColDef = {
			flex: 1,
			sortable: true,
			resizable: true,
			filter: true
		};

		this.columnDefs = [
			{
				headerName: 'Descripción',
				field: 'PartyName',
				cellRenderer: 'agGroupCellRenderer',
			},
			{ field: 'PartyIdentification' },

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
						field: 'title',
					},
					{ field: 'ContractFolderID' },
				],
				defaultColDef: {
					sortable: true,
					flex: 1,
				},
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
						const detail: IDetail = { title: licitacion.title, ContractFolderID: licitacion.ContractFolderID }
						licitaciones.push(detail);
					}
				}
			})
			item.detail = licitaciones;
		})
		return data;
	}
}

interface IData {
	PartyName: string,
	PartyIdentification: string,
	detail?: IDetail[]
}

interface IDetail {
	title: string;
	ContractFolderID: string;
}
