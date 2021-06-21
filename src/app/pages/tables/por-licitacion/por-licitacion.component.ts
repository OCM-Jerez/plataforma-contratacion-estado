/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community/main';

import { CellRendererOCM } from '../../../shared/utils/utils';
import localeTextESPes from '../../../../assets/data/localeTextESPes.json';

@Component({
	selector: 'app-por-licitacion',
	templateUrl: './por-licitacion.component.html'
})
export class PorLicitacionComponent {
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
					// {
					// 	headerName: 'Adjudicatario',
					// 	// field: 'ContractFolderStatus.TenderResult.WinningParty.PartyName.Name',
					// 	field: 'PartyName',
					// 	width: 350,
					// 	rowGroup: true,
					// 	filter: false,
					// 	pinned: 'left',
					// 	// showRowGroup: 'ContractFolderStatus.TenderResult.WinningParty.PartyName.Name',
					// 	showRowGroup: 'PartyName',
					// 	cellRenderer: 'agGroupCellRenderer',
					// 	cellRendererParams: {
					// 		// suppressCount: true,
					// 		innerRenderer: (params: { node: { group: any }; value: any }) => {
					// 			if (params.node.group) {
					// 				// eslint-disable-next-line @typescript-eslint/no-unsafe-return
					// 				return params.value;
					// 			} else {
					// 				return '';
					// 			}
					// 		},
					// 		footerValueGetter(params: { value: string; node: { level: any } }) {
					// 			// const val = params.value.split(' - ')[1];
					// 			switch (params.node.level) {
					// 				case 0: // Total adjudicatario.
					// 					return `<span style="color: red; font-size: 10px;  font-weight: bold; margin-left: 0px;"> Total ${params.value}</span>`;
					// 				case -1: // Total general.
					// 					return '';
					// 				default:
					// 					return 'SIN FORMATO';
					// 			}
					// 		}
					// 	}
					// }

					{
						headerName: 'Contrato menor',
						field: 'ContractFolderID',
						width: 1200,
						rowGroup: true,
						filter: false,
						pinned: 'left',
						showRowGroup: 'ContractFolderID',
						cellRenderer: 'agGroupCellRenderer',
						valueGetter: (params: any) => {
							if (params.data) {
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								return `${params.data.ContractFolderID}  ${params.data.AwardDate}  ${params.data.Name}  ${params.data.TaxExclusiveAmount} euros`;
							} else {
								return null;
							}
						},
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
								switch (params.node.level) {
									case 0: // Total adjudicatario.
										// return `<span style="color: red; font-size: 10px;  font-weight: bold; margin-left: 0px;"> Total ${params.value}</span>`;
										return `<span style="color: red; font-size: 10px;  font-weight: bold; margin-left: 0px;"> Total</span>`;
									case -1: // Total general.
										return '';
									default:
										return 'SIN FORMATO';
								}
							}
						}
					}
					// {
					// 	headerName: 'Fecha',
					// 	field: 'AwardDate',
					// 	width: 144,
					// 	resizable: true,
					// 	pinned: 'left',
					// 	suppressCount: true
					// 	// rowGroup: true,
					// 	// showRowGroup: 'AwardDate',
					// 	// cellRenderer: 'agGroupCellRenderer',
					// 	// cellRendererParams: {
					// 	// 	suppressCount: true,
					// 	// 	innerRenderer: (params: { node: { group: any }; value: any }) => {
					// 	// 		if (params.node.group) {
					// 	// 			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
					// 	// 			return params.value;
					// 	// 		} else {
					// 	// 			return '';
					// 	// 		}
					// 	// 	},
					// 	// 	// footerValueGetter(params: { value: string; node: { level: any } }) {
					// 	// 	// 	switch (params.node.level) {
					// 	// 	// 		case 1: // Total adjudicatario.
					// 	// 	// 			return `<span style="color: red; font-size: 10px;  font-weight: bold; margin-left: 0px;"> Total ${params.value}</span>`;
					// 	// 	// 		case 0: // Total general.
					// 	// 	// 			return '';
					// 	// 	// 		default:
					// 	// 	// 			return 'SIN FORMATO';
					// 	// 	// 	}
					// 	// 	// }
					// 	// }
					// },
					// {
					// 	headerName: 'Descripción',
					// 	field: 'Name',
					// 	width: 850,
					// 	resizable: true,
					// 	rowGroup: false,
					// 	filter: false,
					// 	pinned: 'left',
					// 	// showRowGroup: 'Name',
					// 	cellRenderer: 'agGroupCellRenderer'
					// },
					// {
					// 	headerName: 'TOTAL',
					// 	field: 'TaxExclusiveAmount',
					// 	width: 88,
					// 	resizable: true,
					// 	rowGroup: false,
					// 	filter: false,
					// 	pinned: 'left',
					// 	showRowGroup: 'TaxExclusiveAmount'
					// 	// cellRenderer: 'agGroupCellRenderer',
					// 	// aggFunc: 'sum'
					// }
				]
			},

			// {
			// 	headerName: 'ID',
			// 	field: 'ContractFolderID',
			// 	width: 130,
			// 	resizable: true
			// },
			{
				headerName: 'Adjudicatario',
				field: 'PartyName',
				width: 300,
				resizable: true
			},
			// {
			// 	headerName: 'Estado',
			// 	field: 'ContractFolderStatusCode',
			// 	width: 80,
			// 	resizable: true
			// },
			// {
			// 	headerName: 'Fecha',
			// 	field: 'AwardDate',
			// 	width: 90,
			// 	resizable: true
			// },
			// {
			// 	headerName: 'Descripción',
			// 	field: 'Name',
			// 	width: 900,
			// 	resizable: true
			// },
			{
				headerName: 'CIF',
				field: 'PartyIdentification',
				width: 90,
				resizable: true
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
		this.rowData = this.http.get('../assets/data/contratosMenores2020map.json');
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
