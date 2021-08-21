/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, ViewChild } from '@angular/core';
import contratosmenoresJson from '../../../../assets/data/todos.json';

import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community/main';

import { CellRendererOCM } from '../../../util/CellRendererOCM';
import localeTextESPes from '../../../../assets/data/localeTextESPes.json';
import { IArrayTenderResult } from 'src/app/models/contratos.interfaces';

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

	constructor() {
		this.columnDefs = [
			{
				children: [

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
								// return `${params.data.ContractFolderID}  ${params.data.AwardDate}  ${params.data.Name}  ${params.data.TaxExclusiveAmount} euros`;
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								return `${params.data.ContractFolderID}  ${params.data.updated}  ${params.data.Name}`;
							} else {
								return null;
							}
						},
						cellRendererParams: {
							suppressCount: true,
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
					},

				]
			},

			{
				headerName: 'Fecha',
				field: 'updated',
				width: 90,
				resizable: true,
			},

			{
				headerName: 'Adjudicatario',
				field: 'arrayTenderResult',
				width: 300,
				resizable: true,

				// rowSpan: (params: any) => { return 4 },
				valueFormatter: (params: any) => {
					if (params.data && params.data.arrayTenderResult) {
						const tenderResult: IArrayTenderResult[] = params.data.arrayTenderResult;
						const empresas = tenderResult.map((item) => {
							return item.PartyName;
						});

						return empresas;
					} else {
						return null;
					}
				}
				// valueGetter: (params: any) => {
				// 	if (params.data && params.data.arrayTenderResult) {
				// 		const tenderResult: IArrayTenderResult[] = params.data.arrayTenderResult;

				// 		const empresas = tenderResult.map((item) => {
				// 			return item.PartyName;
				// 		});

				// 		return empresas;
				// 	} else {
				// 		return null;
				// 	}
				// }
			},
			{
				headerName: 'CIF',
				field: 'PartyIdentification',
				width: 90,
				resizable: true,
				valueFormatter: (params: any) => {
					if (params.data && params.data.arrayTenderResult) {
						const tenderResult: IArrayTenderResult[] = params.data.arrayTenderResult;
						const empresas = tenderResult.map((item) => {
							return item.PartyIdentification;
						});

						return empresas;
					} else {
						return null;
					}
				}
			},

			{
				headerName: 'Parcial',
				field: 'TaxExclusiveAmount',
				width: 80,
				resizable: true,
				aggFunc: 'sum',
				cellRenderer: CellRendererOCM,
				valueFormatter: (params: any) => {
					if (params.data && params.data.arrayTenderResult) {
						const tenderResult: IArrayTenderResult[] = params.data.arrayTenderResult;
						const empresas = tenderResult.map((item) => {
							return item.TaxExclusiveAmount;
						});

						return empresas;
					} else {
						return null;
					}
				}
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
		this.rowData = contratosmenoresJson;
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
