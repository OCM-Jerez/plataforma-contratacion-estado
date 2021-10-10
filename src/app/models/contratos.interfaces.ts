import { TipoGrafico } from './tipos-graficos.type';

export interface IChartContrato {
	codeText: string;
	contratos: number;
	sumPayableAmount: number;
}

export interface IChannelChart {
	titulo1: string;
	titulo2: string;
	tituloPagina: string;
	tipoReporte: TipoGrafico;
	rangos: number[];
}

export interface ILicitacion {
	link: string;
	summary: string;
	title: string;
	updated: string;
	ContractFolderID: string;
	ContractFolderStatusCode: string;
	Name: string;
	TypeCode: string;
	SubTypeCode: string;
	TotalAmount: number;
	TaxExclusiveAmount: number;
	DurationMeasure: string;
	unitCode: string;
	ProcedureCode: string;
	UrgencyCode: string;
	arrayTenderResult: IArrayTenderResult[];
}

export interface IArrayTenderResult {
	ResultCode: string;
	AwardDate: string;
	ReceivedTenderQuantity: string;
	PartyIdentification: string;
	PartyName: string;
	TaxExclusiveAmount: number | string;
	PayableAmount: number | string;
}

export interface IData {
	PartyName: string,
	PartyIdentification: string,
	TaxExclusiveAmount: number,
	TotalAmount: number,
	detail?: IDetail[]
}

export interface IDetail {
	updated: string;
	ContractFolderID: string;
	link: string;
	Name: string;
	TotalAmount: number;
	TaxExclusiveAmount: number;
	ProcedureCode: string;
	TypeCode: string;
}

// https://quicktype.io/
export interface IOption {
	title?: Title;
	subtitle?: Title;
	legend?: Legend;
	data?: Datum[];
	series?: Series[];
	axes?: Axe[];
}

export interface Axe {
	type?: string;
	position?: string;
	label?: AxeLabel;
}

export interface AxeLabel {
	fontWeight?: string;
	rotation?: number;
}

export interface Datum {
	codeText?: string;
	contratos?: number;
	sumPayableAmount?: number;
}

export interface Legend {
	enabled?: boolean;
}

export interface Series {
	type?: string;
	xKey?: string;
	yKeys?: string[];
	yNames?: string[];
	label?: SeriesLabel;
}

export interface SeriesLabel {
	color?: string;
	fontWeight?: string;
	placement?: string;
}

export interface Title {
	text?: string;
}
