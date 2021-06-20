Problema con import localeTextESPes from '../assets/data/localeTextESPes.json';
Se solucina al añadir al tsconfig.json las dos lineas siguientes:
"resolveJsonModule": true,
"allowSyntheticDefaultImports": true,
