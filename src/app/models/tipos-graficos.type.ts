export type TipoGrafico =
	| 'por importe'
	| 'por procedure'
	| 'por urgency'
	| 'por type'
	| 'por subtype'
	| 'por result';

export type OptionsGraph = {
	title: string;
	subtitle: string;
	legend: boolean;
	data: [];
	series: [];
	axes: number[];
};
