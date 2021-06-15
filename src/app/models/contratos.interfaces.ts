export interface IContratoMenor {
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
	ResultCode: string;
	AwardDate: string;
	ReceivedTenderQuantity: string;
	PartyIdentification: string;
	PartyName: string;
	TaxExclusiveAmount1: number;
	PayableAmount: number;
	ProcedureCode: string;
	UrgencyCode: string;
}

export interface IChartContrato {
	codeText: string;
	contratos: number;
	sumPayableAmount: number;
}
