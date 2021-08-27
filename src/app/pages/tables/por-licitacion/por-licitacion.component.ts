import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import { GridOptions } from 'ag-grid-community/main';
import moment from 'moment';

import localeTextESPes from '../../../../assets/data/localeTextESPes.json';
import { CellRendererOCM } from '../../../util/CellRendererOCM';

import { ILicitacion } from 'src/app/models/contratos.interfaces';

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
	public localeText;
	public rowData: ILicitacion[] = [];
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
				headerName: 'Fecha',
				field: 'updated',
				width: 130,
				cellRenderer: 'agGroupCellRenderer',
				valueFormatter: (params: any) => {
					return moment(moment(params.data.updated).toDate()).format('DD-MM-YYYY')
				}
			},
			{
				headerName: 'Referencia',
				field: 'ContractFolderID',
				width: 140,
				// type: 'rightAligned',
			},
			{
				headerName: 'Descripción',
				field: 'Name',
				width: 900,
				wrapText: true,
				autoHeight: true,
			},
			{
				headerName: 'Importe',
				field: 'TotalAmount',
				width: 120,
				aggFunc: 'sum',
				cellRenderer: CellRendererOCM,
			},
		];

		this.detailCellRendererParams = {
			detailGridOptions: {
				rowSelection: 'multiple',
				suppressRowClickSelection: false,
				enableRangeSelection: true,
				pagination: false,
				paginationAutoPageSize: true,
				columnDefs: [
					{
						headerName: 'CIF',
						field: 'PartyIdentification',
						width: 100,
					},
					{
						headerName: 'Nombre',
						field: 'PartyName',
						width: 400,
					},
					{
						headerName: 'Importe',
						field: 'PayableAmount',
						width: 120,
						aggFunc: 'sum',
						cellRenderer: CellRendererOCM,
					}
				],
			},
			getDetailRowData: function (params: any) {
				params.successCallback(params.data.arrayTenderResult);
			},
		};
	}

	onGridReady(params: { api: any; columnApi: any }) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		const data = localStorage.getItem('dataLicitacion');
		this.rowData = JSON.parse(data!) as ILicitacion[];
	}
}
