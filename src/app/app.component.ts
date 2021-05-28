/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community/main';

import { CellRendererOCM } from './shared/utils/utils';
// import localeTextESPes from '../assets/data/localeTextESPes.json';

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
	// public localeText;
	public rowData: any;

	constructor(private http: HttpClient) {
		this.columnDefs = [
			{
				headerName: 'ID',
				field: 'ContractFolderStatus.ContractFolderID',
				width: 200,
				resizable: true
				// aggFunc: 'sum',
				// cellRenderer: CellRendererOCM
			},
			{
				headerName: 'Estado',
				field: 'ContractFolderStatus.ContractFolderStatusCode',
				width: 50,
				resizable: true
			},
			{
				headerName: 'Fecha',
				field: 'ContractFolderStatus.TenderResult.AwardDate',
				width: 100,
				resizable: true
			},
			{
				headerName: 'Descripción',
				field: 'ContractFolderStatus.ProcurementProject.Name',
				width: 500,
				resizable: true
			},
			{
				headerName: 'CIF',
				field: 'ContractFolderStatus.TenderResult.WinningParty.PartyIdentification.ID',
				width: 150,
				resizable: true
			},
			{
				headerName: 'Adjudicatario',
				field: 'ContractFolderStatus.TenderResult.WinningParty.PartyName.Name',
				width: 400,
				resizable: true
			},
			{
				headerName: 'Importe sin IVA',
				field:
					'ContractFolderStatus.TenderResult.AwardedTenderedProject.LegalMonetaryTotal.TaxExclusiveAmount',
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

		// we pass an empty gridOptions in, so we can grab the api out
		this.gridOptions = {} as GridOptions;
		// this.localeText = localeTextESPes;
	}

	onGridReady(params: { api: any; columnApi: any }) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		this.rowData = this.http.get('../assets/data/Jerez-01.json');
	}
}
