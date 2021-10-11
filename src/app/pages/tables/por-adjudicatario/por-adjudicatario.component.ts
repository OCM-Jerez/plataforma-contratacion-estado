import { Component, ViewChild } from '@angular/core';

import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community/main';
import moment from 'moment';

import { CellRendererOCM } from '../../../ag-grid/CellRendererOCM';
import localeTextESPes from '../../../../assets/data/localeTextESPes.json';

import { ILicitacion, IData, IDetail } from 'src/app/models/contratos.interfaces';
import { Static } from 'src/app/util/static';

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
	// public isExpanded = false;
	public rowHeight = 50;
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
			filter: true,
			headerComponentParams: {
				template:
					'<div class="ag-cell-label-container" role="presentation">' +
					'  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
					'  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
					'    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
					'    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
					'    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
					'    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
					'    <span ref="eText" class="ag-header-cell-text" role="columnheader" style="white-space: normal;"></span>' +
					'    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
					'  </div>' +
					'</div>',
			},
		};

		this.columnDefs = [
			{
				headerName: 'Empresa adjudicataria',
				field: 'PartyName',
				width: 400,
				cellRenderer: 'agGroupCellRenderer',
				valueFormatter: (params: any) => {
					return params.data.PartyName.toUpperCase();
				}
			},
			{
				headerName: 'CIF',
				field: 'PartyIdentification',
				width: 120,
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
				suppressRowClickSelection: true,
				enableRangeSelection: true,
				pagination: false,
				paginationAutoPageSize: false,
				columnDefs: [
					{
						headerName: 'Fecha',
						field: 'updated',
						width: 100,
						sortable: true,
						filter: true,
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
						headerName: 'Procedimiento',
						field: 'ProcedureCode',
						width: 130,
						valueFormatter: (params: any) => {
							const ProcedureCode = Static.TIPOS_PROCEDURE.find((item) => item.id == params.data.ProcedureCode);
							return `${ProcedureCode!.id}  ${ProcedureCode!.value}`;
						}
					},
					{
						headerName: 'Tipo',
						field: 'TypeCode',
						width: 100,
						valueFormatter: (params: any) => {
							const TypeCode = Static.TIPOS_TYPE.find((item) => item.id == params.data.TypeCode);
							return `${TypeCode!.id}  ${TypeCode!.value}`;
						}
					},
					{
						headerName: 'Descripción',
						field: 'Name',
						width: 400,
						wrapText: true,
						autoHeight: true,
						resizable: true,
						filter: true,
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
				],
			},
			getDetailRowData: function (params: any) {
				params.successCallback(params.data.detail);
			},
		};
	}

	onBtShowNoRows() {
		this.gridOptions.api!.showNoRowsOverlay();
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
						TotalAmount: item.TotalAmount,
						TaxExclusiveAmount: item.TaxExclusiveAmount
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
						const detail: IDetail = {
							updated: licitacion.updated,
							Name: licitacion.Name,
							ContractFolderID: licitacion.ContractFolderID,
							link: licitacion.link,
							ProcedureCode: licitacion.ProcedureCode,
							TypeCode: licitacion.TypeCode,
							TotalAmount: licitacion.TotalAmount,
							TaxExclusiveAmount: licitacion.TaxExclusiveAmount
						}
						licitaciones.push(detail);
					}
				}
			})
			item.TotalAmount = licitaciones.reduce((a, b) => a + b.TotalAmount, 0);
			item.TaxExclusiveAmount = licitaciones.reduce((a, b) => a + b.TaxExclusiveAmount, 0);
			item.detail = licitaciones;
		})
		return data;
	}
	headerHeightSetter() {
		var padding = 20;
		var height = headerHeightGetter() + padding;
		this.gridApi.setHeaderHeight(height);
		this.gridApi.resetRowHeights();
	}
}

function headerHeightGetter() {
	var columnHeaderTexts = document.querySelectorAll('.ag-header-cell-text');
	var columnHeaderTextsArray: Element[] = [];
	columnHeaderTexts.forEach(node => columnHeaderTextsArray.push(node));
	var clientHeights = columnHeaderTextsArray.map(
		headerText => headerText.clientHeight
	);
	var tallestHeaderTextHeight = Math.max(...clientHeights);
	return tallestHeaderTextHeight;
}



