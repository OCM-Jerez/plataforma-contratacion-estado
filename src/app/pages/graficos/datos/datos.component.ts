import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-datos',
	templateUrl: './datos.component.html',
	styleUrls: ['./datos.component.scss']
})
export class DatosComponent {
	constructor(private http: HttpClient) {
		const data = http.get('../assets/data/contratosMenores2020map.json');
		// const dataJSON = JSON.parse(data);
	}
}

const rangePayableAmount = [
	{
		rangePayableAmount: '10.000 - 15.000',
		contratos: 37,
		sumPayableAmount: 256245
	},
	{
		rangePayableAmount: '5.0000 - 10.000',
		contratos: 20,
		sumPayableAmount: 156345
	},
	{
		rangePayableAmount: '1.000 - 5.000',
		contratos: 80,
		sumPayableAmount: 45879
	},

	{
		rangePayableAmount: '0 - 1.000',
		contratos: 45,
		sumPayableAmount: 125487
	}
];

const TypeCode = [
	{
		TypeCode: 1,
		contratos: 37,
		sumPayableAmount: 256245
	},
	{
		TypeCode: 2,
		contratos: 20,
		sumPayableAmount: 156345
	},
	{
		TypeCode: 3,
		contratos: 80,
		sumPayableAmount: 45879
	},

	{
		TypeCode: 4,
		contratos: 45,
		sumPayableAmount: 125487
	}
];

const SubTypeCode = [
	{
		SubTypeCode: 1,
		contratos: 37,
		sumPayableAmount: 256245
	},
	{
		SubTypeCode: 2,
		contratos: 20,
		sumPayableAmount: 156345
	},
	{
		SubTypeCode: 3,
		contratos: 80,
		sumPayableAmount: 45879
	},

	{
		SubTypeCode: 4,
		contratos: 45,
		sumPayableAmount: 125487
	}
];

const ResultCode = [
	{
		ResultCode: 1,
		contratos: 37,
		sumPayableAmount: 256245
	},
	{
		TypeResultCodeCode: 2,
		contratos: 20,
		sumPayableAmount: 156345
	},
	{
		ResultCode: 3,
		contratos: 80,
		sumPayableAmount: 45879
	},

	{
		ResultCode: 4,
		contratos: 45,
		sumPayableAmount: 125487
	}
];

const ProcedureCode = [
	{
		ProcedureCode: 1,
		contratos: 37,
		sumPayableAmount: 256245
	},
	{
		ProcedureCode: 2,
		contratos: 20,
		sumPayableAmount: 156345
	},
	{
		ProcedureCode: 3,
		contratos: 80,
		sumPayableAmount: 45879
	},

	{
		TypProcedureCodeeCode: 4,
		contratos: 45,
		sumPayableAmount: 125487
	}
];

const UrgencyCode = [
	{
		UrgencyCode: 1,
		contratos: 37,
		sumPayableAmount: 256245
	},
	{
		UrgencyCode: 2,
		contratos: 20,
		sumPayableAmount: 156345
	},
	{
		UrgencyCode: 3,
		contratos: 80,
		sumPayableAmount: 45879
	},

	{
		UrgencyCode: 4,
		contratos: 45,
		sumPayableAmount: 125487
	}
];

// this.http.get('https://www.ag-grid.com/example-assets/olympic-winners.json').subscribe((data) => {
// 	data.forEach(function (dataItem) {
// 		dataItem.latinText = latinText;
// 	});
// 	this.rowData = data;
// });

// function saveFinalJson(arrayFinal) {
// if (!fs.existsSync('./extracted/jsonFinal')) {
// 	fs.mkdirSync('extracted/jsonFinal');
// }
// fs.writeFile('./extracted/jsonFinal/jsonfinal.json', JSON.stringify(arrayFinal), function (err) {
// 	if (err) throw err;
// 	console.log(`${fileNameJson} saved`);
// 	console.log('Paso 2 ¡Hecho!');
// }

// data.map((elem: any) => {
//   const item = {
//     link: elem.link[0].$.href,
//     summary: elem.summary[0]._,
//   };

//   arrayFinal.push(item);
// }
