export class Static {
	public static TIPOS_PROCEDURE = [
		{ id: 1, value: 'Abierto' },
		{ id: 2, value: 'Restringido' },
		{ id: 3, value: 'Negociado sin publicidad' },
		{ id: 4, value: 'Negociado con publicidad' },
		{ id: 5, value: 'Diálogo competitivo' },
		{ id: 6, value: 'Contrato menor' },
		{ id: 7, value: 'Derivado de acuerdo marco' },
		{ id: 8, value: 'Concurso de proyectos' },
		{ id: 9, value: 'Abierto simplificado' },
		{ id: 10, value: 'Asociación para la innovación' },
		{ id: 11, value: 'Basado en un sistema dinámico de adquisición' },
		{ id: 100, value: 'Normas internas' },
		{ id: 999, value: 'Otros' }
	];

	public static TIPOS_URGENCY = [
		{ id: 1, value: 'Ordinaria' },
		{ id: 2, value: 'Urgente' },
		{ id: 3, value: 'Emergencia' }
	];

	public static RANGO_IMPORTE = [
		{ id: 1, value: { rangoInicial: 0, rangoFinal: 99, codeText: '0 - 100' } },
		{ id: 2, value: { rangoInicial: 100, rangoFinal: 499, codeText: '100 - 500' } },
		{ id: 3, value: { rangoInicial: 500, rangoFinal: 999, codeText: '500 - 1.000' } },
		{ id: 4, value: { rangoInicial: 1000, rangoFinal: 1999, codeText: '1.000 - 2.000' } },
		{ id: 5, value: { rangoInicial: 2000, rangoFinal: 2999, codeText: '2.000 - 3.000' } },
		{ id: 6, value: { rangoInicial: 3000, rangoFinal: 3999, codeText: '3.000 - 4.000' } },
		{ id: 7, value: { rangoInicial: 4000, rangoFinal: 4999, codeText: '4.000 - 5.000' } },
		{ id: 8, value: { rangoInicial: 5000, rangoFinal: 9999, codeText: '5.000 - 10.000' } },
		{ id: 9, value: { rangoInicial: 10000, rangoFinal: 13999, codeText: '10.000 - 14.000' } },
		{ id: 10, value: { rangoInicial: 14000, rangoFinal: 14999, codeText: '14.000 - 15.000' } },
		{ id: 11, value: { rangoInicial: 15000, rangoFinal: 24999, codeText: '15.000 - 25.000' } },
		{ id: 12, value: { rangoInicial: 25000, rangoFinal: 34999, codeText: '25.000 - 35.000' } },
		{ id: 13, value: { rangoInicial: 35000, rangoFinal: 45000, codeText: '35.000 - 45.000' } },
		{ id: 14, value: { rangoInicial: 45001, rangoFinal: 20000000, codeText: 'Más de 45.000' } }
	];

	public static TIPOS_TYPE = [
		{ id: 1, value: 'Suministros' },
		{ id: 2, value: 'Servicios' },
		{ id: 3, value: 'Obras' },
		{ id: 7, value: 'Administrativo especial' },
		{ id: 8, value: 'Privado' },
		{ id: 21, value: 'Gestión de Servicios Públicos' },
		{ id: 22, value: 'Concesión de Servicios' },
		{ id: 31, value: 'Concesión de Obras Públicas' },
		{ id: 32, value: 'Concesión de Obras' },
		{ id: 40, value: 'Colaboración entre el sector público y sector privado' },
		{ id: 50, value: 'Patrimonial' }
	];

	public static TIPOS_SUBTYPE = [
		{ id: 1, value: 'Servicios de mantenimiento y reparación.' },
		{ id: 2, value: 'Servicios de transporte por vía terrestre.' },
		{ id: 3, value: 'Servicios de transporte aéreo.' },
		{ id: 4, value: 'Transporte de correo por vía terrestre y por vía aérea.' },
		{ id: 5, value: 'Servicios de telecomunicación.' },
		{ id: 6, value: 'Servicios financieros.' },
		{ id: 7, value: 'Servicios de informática y servicios conexos.' },
		{ id: 8, value: 'Servicios de investigación y desarrollo.' },
		{ id: 9, value: 'Servicios de contabilidad, auditoría y teneduría de libros.' },
		{ id: 10, value: 'Servicios de investigación de estudios y encuestas de la opinión pública.' },
		{ id: 11, value: 'Servicios de consultores de dirección y servicios conexos.' },
		{ id: 12, value: 'Servicios de arquitectura; servicios de ingeniería.' },
		{ id: 13, value: 'Servicios de publicidad Servicios de limpieza de edificios.' },
		{ id: 15, value: 'Servicios editoriales y de imprenta, por tarifa o por contrato.' },
		{ id: 16, value: 'Servicios de alcantarillado y eliminación de desperdicios.' },
		{ id: 17, value: 'Servicios de hostelería y restaurante.' },
		{ id: 18, value: 'Servicios de transporte por ferrocarril.' },
		{ id: 19, value: 'Servicios de transporte fluvial y marítimo.' },
		{ id: 20, value: 'Servicios de transporte complementarios y auxiliares.' },
		{ id: 21, value: 'Servicios jurídicos.' },
		{ id: 22, value: 'Servicios de colocación y suministro de personal.' },
		{ id: 23, value: 'Servicios de investigación y seguridad.' },
		{ id: 24, value: ' Servicios de educación y formación profesional.' },
		{ id: 25, value: ' Servicios sociales y de salud.' },
		{ id: 26, value: ' Servicios de esparcimiento, culturales y deportivos.' },
		{ id: 27, value: ' Otros servicios.' }
	];

	public static TIPOS_RESULT = [
		{ id: 1, value: 'Adjudicado Provisionalmente' },
		{ id: 2, value: 'Adjudicado Definitivamente' },
		{ id: 4, value: 'Desistimiento' },
		{ id: 5, value: 'Renuncia' },
		{ id: 6, value: 'Desierto Provisionalmente' },
		{ id: 7, value: 'Desierto Definitivamente' },
		{ id: 8, value: 'Adjudicado' },
		{ id: 9, value: 'Formalizado' },
		{ id: 10, value: 'Licitador mejor valorado:Requerimiento de documentacion' }
	];
}
