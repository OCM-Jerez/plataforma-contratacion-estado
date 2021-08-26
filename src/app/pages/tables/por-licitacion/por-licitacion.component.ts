/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, ViewChild } from '@angular/core';

import moment from 'moment';

import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community/main';
import localeTextESPes from '../../../../assets/data/localeTextESPes.json';
import { CellRendererOCM } from '../../../util/CellRendererOCM';

import { IArrayTenderResult, ILicitacion } from 'src/app/models/contratos.interfaces';

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
	public rowData: ILicitacion[] = [];
	public isExpanded = false;
	detailCellRendererParams: any;

	constructor() {
		// this.columnDefs = [
		// 	{
		// 		headerName: 'ID',
		// 		field: 'ContractFolderID',
		// 		width: 110,
		// 		type: 'rightAligned',
		// 		resizable: true,
		// 	},
		// 	{
		// 		headerName: 'Fecha',
		// 		field: 'updated',
		// 		width: 90,
		// 		resizable: true,
		// 		valueFormatter: (params: any) => {
		// 			return moment(moment(params.data.updated).toDate()).format('DD-MM-YYYY')
		// 		}
		// 	},
		// 	{
		// 		headerName: 'Descripción',
		// 		field: 'Name',
		// 		width: 900,
		// 		resizable: true,
		// 		wrapText: true,
		// 		autoHeight: true,
		// 	},
		// 	{
		// 		headerName: 'Adjudicatario',
		// 		field: 'arrayTenderResult',
		// 		width: 300,
		// 		resizable: true,
		// 		wrapText: true,
		// 		autoHeight: true,
		// 		valueFormatter: (params: any) => {
		// 			if (params.data && params.data.arrayTenderResult) {
		// 				const tenderResult: IArrayTenderResult[] = params.data.arrayTenderResult;
		// 				const empresas = tenderResult.map((item) => {
		// 					return `${item.PartyName} ${item.PayableAmount}`;
		// 				});
		// 				return empresas;
		// 			} else {
		// 				return null;
		// 			}
		// 		}
		// 	},
		// 	{
		// 		headerName: 'CIF',
		// 		field: 'PartyIdentification',
		// 		width: 100,
		// 		resizable: true,
		// 		wrapText: true,
		// 		autoHeight: true,
		// 		valueFormatter: (params: any) => {
		// 			if (params.data && params.data.arrayTenderResult) {
		// 				const tenderResult: IArrayTenderResult[] = params.data.arrayTenderResult;
		// 				const empresas = tenderResult.map((item) => {
		// 					return item.PartyIdentification;
		// 				});
		// 				return empresas;
		// 			} else {
		// 				return null;
		// 			}
		// 		}
		// 	},
		// 	{
		// 		headerName: 'Importe',
		// 		field: 'TotalAmount',
		// 		width: 80,
		// 		resizable: true,
		// 		aggFunc: 'sum',
		// 		cellRenderer: CellRendererOCM,
		// 		valueFormatter: (params: any) => {
		// 			if (params.data && params.data.arrayTenderResult) {
		// 				const tenderResult: IArrayTenderResult[] = params.data.arrayTenderResult;
		// 				const empresas = tenderResult.map((item) => {
		// 					return item.PayableAmount;
		// 				});
		// 				return empresas;
		// 			} else {
		// 				return null;
		// 			}
		// 		}
		// 	}
		// ];

		// this.defaultColDef = {
		// 	sortable: true,
		// 	resizable: true,
		// 	filter: true
		// };

		this.gridOptions = {} as GridOptions;
		this.localeText = localeTextESPes;


		this.defaultColDef = { flex: 1 };

		this.columnDefs = [
			{
				headerName: 'Descripción',
				field: 'Name',
				cellRenderer: 'agGroupCellRenderer',
			},
			{ field: 'title' },
			{ field: 'updated' },
			{ field: 'ContractFolderID' },
			{ field: 'TotalAmount' },


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
						field: 'PartyName',
					},
					{ field: 'PartyIdentification' },
					{ field: 'PayableAmount' }
				],
				defaultColDef: {
					sortable: true,
					flex: 1,
				},
			},
			getDetailRowData: function (params: any) {
				params.successCallback(params.data.arrayTenderResult);
			},
		};

	}

	onFirstDataRendered(params: any) {
		setTimeout(function () {
			params.api.getDisplayedRowAtIndex(1).setExpanded(true);
		}, 0);
	}

	onGridReady(params: { api: any; columnApi: any }) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;

		const data = localStorage.getItem('dataLicitacion');
		this.rowData = JSON.parse(data!) as ILicitacion[];
	}
}
