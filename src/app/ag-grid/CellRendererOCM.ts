export function CellRendererOCM(params: any) {
	if (params.value) {
		const valorFormateado: number = params.value
			.toString()
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
		if (params.node.footer) {
			switch (params.node.level) {
				case 3: // Total cuarto nivel.
					return `<h1 style="text-align: right; color: red; font-size: 10px; font-weight: bold">${valorFormateado}</h1>`;
				case 2: // Total tercero nivel.
					return `<h1 style="text-align: right; color: red; font-size: 10px; font-weight: bold">${valorFormateado}</h1>`;
				case 1: // Total segundo nivel.
					return `<h1 style="text-align: right; color: red; font-size: 10px; font-weight: bold">${valorFormateado}</h1>`;
				case 0: // Total primer nivel.
					return `<h1 style="text-align: right; color: red; font-size: 10px; font-weight: bold">${valorFormateado}</h1>`;
				case -1: // Total general.
					return `<h1 style="text-align: right; color: red; font-size: 10px; font-weight: bold">${valorFormateado}</h1>`;
				default:
					return 'SIN FORMATO';
			}
		} else {
			return `<h1 style="font-size: 10px; text-align: right">${valorFormateado}</h1>`;
		}
	} else {
		return '';
	}
}
