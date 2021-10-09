import { Component, ViewChild } from '@angular/core';

import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community/main';
import moment from 'moment';

import localeTextESPes from '../../../../assets/data/localeTextESPes.json';
import { CellRendererOCM } from '../../../ag-grid/CellRendererOCM';

import { ILicitacion } from 'src/app/models/contratos.interfaces';
import { Static } from '../../../util/static';

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
		this.gridOptions = {
			overlayNoRowsTemplate:
				'<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">This is a custom \'no rows\' overlay</span>'
		} as GridOptions;
		this.localeText = localeTextESPes;
		this.defaultColDef = {
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
				headerName: 'Link',
				field: 'link',
				width: 70,
				sortable: false,
				resizable: false,
				filter: false,
				cellRenderer: function (params: any) {
					return '<a href="' + params.data.link + '">' + "Enlace" + '</a>';
				}
			},
			{
				headerName: 'Estado',
				field: 'ContractFolderStatusCode',
				width: 100,
			},
			{
				headerName: 'Procedimiento',
				field: 'ProcedureCode',
				width: 190,
				valueFormatter: (params: any) => {
					const ProcedureCode = Static.TIPOS_PROCEDURE.find((item) => item.id == params.data.ProcedureCode);
					return `${ProcedureCode!.id}  ${ProcedureCode!.value}`;
				}
			},
			{
				headerName: 'Tipo',
				field: 'TypeCode',
				width: 125,
				valueFormatter: (params: any) => {
					const TypeCode = Static.TIPOS_TYPE.find((item) => item.id == params.data.TypeCode);
					return `${TypeCode!.id}  ${TypeCode!.value}`;
				}
			},
			{
				headerName: 'Unidades',
				field: 'unitCode',
				width: 100,
			},
			{
				headerName: 'Duración',
				field: 'DurationMeasure',
				width: 100,
				valueFormatter: (params: any) => {
					const UnitCode = Static.DURATION_MEASURE.find((item) => item.id === params.data.unitCode);
					return `${params.data.DurationMeasure}  ${UnitCode!.value}`;
				}
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
				field: 'TaxExclusiveAmount',
				width: 105,
				aggFunc: 'sum',
				cellRenderer: CellRendererOCM,
			},
			{
				headerName: 'Importe + IVA',
				field: 'TotalAmount',
				width: 140,
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
						field: 'TaxExclusiveAmount',
						width: 105,
						aggFunc: 'sum',
						cellRenderer: CellRendererOCM,
					},
					{
						headerName: 'Importe + IVA',
						field: 'PayableAmount',
						width: 140,
						aggFunc: 'sum',
						cellRenderer: CellRendererOCM,
					},
				],
			},
			getDetailRowData: function (params: any) {
				params.successCallback(params.data.arrayTenderResult);
			},
		};

		// this.onBtShowNoRows();
	}

	// https://www.ag-grid.com/javascript-data-grid/overlays/#example
	onBtShowNoRows() {
		this.gridOptions.api!.showNoRowsOverlay();
	}

	onGridReady(params: { api: any; columnApi: any }) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		const data = localStorage.getItem('dataLicitacion');
		this.rowData = JSON.parse(data!) as ILicitacion[];
	}
}

