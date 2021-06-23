Warning: C:\Users\pc\Google Drive\Angular\OCM\plataforma-contratacion-estado\src\app\app.module.ts depends on 'ag-grid-enterprise'. CommonJS or AMD dependencies can cause optimization bailouts.
For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies

Unificar tables.

global-constants.ts para tener unificado la llamada a los datos en json
cambio de año datos.

revision estructura

revision codigo

Trato de crear un Type // public options1: OptionsGraph;
en porcode.component.ts

Grid ¿De creacion porpia para no cargar Bootstrap u otra opción?

Crear nuevas aplicaciones directamente con la ultima versión de Angular, ahora lo hace con la versión 11 y tengo que actualizar.

Al crear una nueva aplicación dice que GIT ya esta inicializado pero parewce que que refiere a la carpeta/Angular no a la nueva.
Con git status me dice que tiene pendiente multitud de cambios en todas las carpetas de /Angular.

Al ejecutar npm run lint --fix da estos errores

C:\Users\pc\Google Drive\Angular\OCM\rellenar-formulario-solicitud\src\main.ts
8:1 error Replace `··` with `↹` prettier/prettier
11:25 error Insert `⏎↹` prettier/prettier
12:1 error Replace `··.catch(err` with `↹.catch((err)` prettier/prettier

C:\Users\pc\Google Drive\Angular\OCM\rellenar-formulario-solicitud\src\polyfills.ts
58:19 error Replace `·//·Included·with·Angular·CLI.⏎` with `//·Included·with·Angular·CLI.` prettier/prettier

C:\Users\pc\Google Drive\Angular\OCM\rellenar-formulario-solicitud\src\test.ts
6:1 error Replace `··` with `↹` prettier/prettier
7:1 error Replace `··` with `↹` prettier/prettier
11:1 error Replace `··context(path:·string,·deep?:·boolean,·filter?:·RegExp` with `↹context(⏎↹↹path:·string,⏎↹↹deep?:·boolean,⏎↹↹filter?:·RegExp⏎↹` prettier/prettier
12:1 error Replace `····` with `↹↹` prettier/prettier
13:1 error Replace `····` with `↹↹` prettier/prettier
14:1 error Replace `··` with `↹` prettier/prettier
18:34 error Replace `⏎··BrowserDynamicTestingModule,⏎··platformBrowserDynamicTesting()⏎` with `BrowserDynamicTestingModule,·platformBrowserDynamicTesting()` prettier/prettier

✖ 449 problems (449 errors, 0 warnings)
448 errors and 0 warnings potentially fixable with the `--fix` option.

Lint errors found in the listed files.

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! rellenar-formulario-solicitud@0.0.0 lint: `ng lint`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the rellenar-formulario-solicitud@0.0.0 lint script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR! C:\Users\pc\AppData\Roaming\npm-cache_logs\2021-06-23T17_49_19_000Z-debug.log

C:\Users\pc\Google Drive\Angular\OCM\rellenar-formulario-solicitud>
