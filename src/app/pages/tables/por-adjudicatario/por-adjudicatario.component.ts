/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, ViewChild } from '@angular/core';

import contratosmenoresJson from '../../../../assets/data/contratosMenores202106map.json';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community/main';

import { CellRendererOCM } from '../../../util/CellRendererOCM';
import localeTextESPes from '../../../../assets/data/localeTextESPes.json';

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

	constructor() {
		// this.rowHeight = 180;
		this.columnDefs = [
			{
				// headerName: 'Capitulo-Económico.',
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
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								return `${params.data.PartyName}      ${params.data.PartyIdentification}`;
							} else {
								return null;
							}
						},
						cellRendererParams: {
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
