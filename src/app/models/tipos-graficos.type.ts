export type TipoGrafico =
	| 'por importe'
	| 'por procedure'
	| 'por urgency'
	| 'por type'
	| 'por subtype'
	| 'por result';

export type OptionsGraph = {
	axes: number[];
	data: [];
	legend: boolean;
	series: [];
	title: string;
};
