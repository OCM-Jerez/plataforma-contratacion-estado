/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community/main';

import { CellRendererOCM } from './shared/utils/utils';
import localeTextESPes from '../assets/data/localeTextESPes.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

	constructor(private http: HttpClient) {
		this.columnDefs = [
			{
				// headerName: 'Capitulo-Económico.',
				children: [
					{
						headerName: 'Adjudicatario',
						// field: 'ContractFolderStatus.TenderResult.WinningParty.PartyName.Name',
						field: 'adjudicatario',
						width: 350,
						rowGroup: true,
						filter: false,
						pinned: 'left',
						// showRowGroup: 'ContractFolderStatus.TenderResult.WinningParty.PartyName.Name',
						showRowGroup: 'adjudicatario',
						cellRenderer: 'agGroupCellRenderer',
						cellRendererParams: {
							// suppressCount: true,
							innerRenderer: (params: { node: { group: any }; value: any }) => {
								if (params.node.group) {
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									return params.value;
								} else {
									return '';
								}
							},
							footerValueGetter(params: { value: string; node: { level: any } }) {
								// const val = params.value.split(' - ')[1];
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
					}
				]
			},

			{
				headerName: 'ID',
				// field: 'ContractFolderStatus.ContractFolderID',
				field: 'id',
				width: 160,
				resizable: true
			},
			{
				headerName: 'Estado',
				// field: 'ContractFolderStatus.ContractFolderStatusCode',
				field: 'status',
				width: 80,
				resizable: true
			},
			{
				headerName: 'Fecha',
				// field: 'ContractFolderStatus.TenderResult.AwardDate',
				field: 'fecha',
				width: 100,
				resizable: true
			},
			{
				headerName: 'Descripción',
				// field: 'ContractFolderStatus.ProcurementProject.Name',
				field: 'titulo',
				width: 900,
				resizable: true
			},
			{
				headerName: 'CIF',
				// field: 'ContractFolderStatus.TenderResult.WinningParty.PartyIdentification.ID',
				field: 'CIF',
				width: 100,
				resizable: true
			},
			// si hay varios adjudicatarios no se muestra,
			// El objeto contiene un array de adjudicatarios.
			// {
			// 	headerName: 'Adjudicatario',
			// 	field: 'ContractFolderStatus.TenderResult.WinningParty.PartyName.Name',
			// 	width: 400,
			// 	resizable: true
			// },
			// si hay varios adjudicatarios no se muestra
			// {
			// 	headerName: 'Importe sin IVA',
			// 	field:
			// 		'ContractFolderStatus.TenderResult.AwardedTenderedProject.LegalMonetaryTotal.TaxExclusiveAmount',
			// 	width: 150,
			// 	resizable: true,
			// 	aggFunc: 'sum',
			// 	cellRenderer: CellRendererOCM
			// },
			{
				headerName: 'Importe sin IVA',
				// field: 'ContractFolderStatus.ProcurementProject.BudgetAmount.TaxExclusiveAmount',
				field: 'sinIVA',
				width: 150,
				resizable: true,
				aggFunc: 'sum',
				cellRenderer: CellRendererOCM
			}
		];

		this.defaultColDef = {
			sortable: true,
			resizable: true,
			filter: true
		};

		this.gridOptions = {} as GridOptions;
		this.localeText = localeTextESPes;
	}

	onGridReady(params: { api: any; columnApi: any }) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		this.rowData = this.http.get('../assets/data/contratosMenores2021map.json');
	}

	expandAll() {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		this.gridApi.expandAll();
		this.isExpanded = true;
	}

	collapseAll() {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		this.gridApi.collapseAll();
		this.isExpanded = false;
	}
}
