Problema con import localeTextESPes from '../assets/data/localeTextESPes.json';
Se solucina al añadir al tsconfig.json las dos lineas siguientes:
"resolveJsonModule": true,
"allowSyntheticDefaultImports": true,


Al usar 
import contratosmenoresJson from '../../../../assets/data/contratosMenores2020map.json';
this.rowData = contratosmenoresJson;
Hay que eliminar el pipe | async
	[rowData]="rowData | async" =>  	[rowData]="rowData"
