Bajar fichero zip
Descomprimir
C:\Users\pc\Google Drive\OCM\Plataforma de contratacion del sector publico\Datos abiertos\Contratos menores\2021\contratosMenoresPerfilesContratantes_202103

Crear nuevo fichero.
Guardar como contratosMenores2021XX.txt
En carpeta:
C:\Users\pc\Google Drive\OCM\Plataforma de contratacion del sector publico\Datos abiertos\Contratos menores\2021\xml

Arrastrar fichero a VScode
CRLR + SHIF - P => Fold level 3
Buscar
Órgano de Contratación: Junta de Gobierno Local del Ayuntamiento de Jerez
Minimizo <entry></entry>
Copio entre <entry></entry>
Pego en el fichero txt donde voy recopilando entradas.
Busco siguiente.

Crear nuevo fichero.
Guardar como contratosMenores2021XX.json
En carpeta
C:\Users\pc\Google Drive\OCM\Plataforma de contratacion del sector publico\Datos abiertos\Contratos menores\2021\json

https://codebeautify.org/xmltojson
Copio todo el contenido del fichero txt
Lo pego en la WEB
Copio todo el resultado de la conversión en la WEB

Lo pego en el fichero json que estoy creando
crtl + alt + v para comnprobar json valido
Borro:
{
"entry": DEJAR [
Borro ultima {
crtl + alt + v para comprobar json valido

Buscar y quitar \" en textos.
Guardar.

Copiar el json, crear const con la matriz:
lici = ([] ya esta en el fichero)
Iterar con map() en RunJS

const result = lici.map((elem) => {
if (Array.isArray(elem.ContractFolderStatus.TenderResult)) {
return {
id: elem.ContractFolderStatus.ContractFolderID,
status: elem.ContractFolderStatus.ContractFolderStatusCode,
titulo: elem.title,
// objeto: elem.ContractFolderStatus.ProcurementProject.Name,
sinIVA: Math.trunc(
elem.ContractFolderStatus.ProcurementProject.BudgetAmount
.TaxExclusiveAmount
),
fecha: elem.ContractFolderStatus.TenderResult[0].AwardDate,
CIF:
elem.ContractFolderStatus.TenderResult[0].WinningParty
.PartyIdentification.ID,
adjudicatario:
elem.ContractFolderStatus.TenderResult[0].WinningParty.PartyName.Name,
CIF1:
elem.ContractFolderStatus.TenderResult[1].WinningParty
.PartyIdentification.ID,
adjudicatario1:
elem.ContractFolderStatus.TenderResult[1].WinningParty.PartyName.Name,
// CIF2: elem.ContractFolderStatus.TenderResult[2].WinningParty.PartyIdentification.ID,
// Adjudicatario2: elem.ContractFolderStatus.TenderResult[2].WinningParty.PartyName.Name,
// fecha1: elem.ContractFolderStatus.ValidNoticeInfo.AdditionalPublicationStatus.AdditionalPublicationDocumentReference[0].IssueDate,
// URL: elem.ContractFolderStatus.ValidNoticeInfo.AdditionalPublicationStatus.AdditionalPublicationDocumentReference[1].Attachment.ExternalReference.URI
};
} else {
return {
id: elem.ContractFolderStatus.ContractFolderID,
status: elem.ContractFolderStatus.ContractFolderStatusCode,
titulo: elem.title,
// objeto: elem.ContractFolderStatus.ProcurementProject.Name,
sinIVA: Math.trunc(
elem.ContractFolderStatus.ProcurementProject.BudgetAmount
.TaxExclusiveAmount
),
fecha: elem.ContractFolderStatus.TenderResult.AwardDate,
CIF:
elem.ContractFolderStatus.TenderResult.WinningParty.PartyIdentification
.ID,
adjudicatario:
elem.ContractFolderStatus.TenderResult.WinningParty.PartyName.Name,
TipoContrato: elem.ContractFolderStatus.ProcurementProject.TypeCode,
tipoLicitacion: elem.ContractFolderStatus.TenderingProcess.ProcedureCode,
urgencia: elem.ContractFolderStatus.TenderingProcess.UrgencyCode,
// fecha1: elem.ContractFolderStatus.ValidNoticeInfo.AdditionalPublicationStatus.AdditionalPublicationDocumentReference[0].IssueDate,
// URL: elem.ContractFolderStatus.ValidNoticeInfo.AdditionalPublicationStatus.AdditionalPublicationDocumentReference[1].Attachment.ExternalReference.URI
};
}
});

// console.log(JSON.stringify(result));
console.log(result);

Cuando hay varios adjudicatarios, tengo que iterar sobre su array conociendo la cantidad de ellos.
Crear un objeto para cada uno de ellos, en la tabla mostrare una misma licitación con los diferentes adjudicatarios.

QUITAR `` DE INICIO Y FINAL.
crtl + shift + p
JSON beatifu.
Si es correcto, grabar.

Sino consigo un JSON valido, crearlo sin // console.log(JSON.stringify(result));
Copiar de RUNJS
Crear nuevo fichero.
Guardar como contratosMenores2021XXmap.json
En carpeta
C:\Users\pc\Google Drive\OCM\Plataforma de contratacion del sector publico\Datos abiertos\Contratos menores\2021\json
Añadir "" a los keys y values.
crtl + alt + v para comprobar json valido
Guardar

añadir , al ultimo {
borrar ]
Añadir mes al ficero JSON con meses anteriores
crtl + alt + v para comprobar json valido
Guardar.

TypeCode:
1 Suministros.
2 Servicios.
3 Obras.
21 Gestión de Servicios Públicos.
22 Concesión de Servicios.
31 Concesión de Obras Públicas.
32 Concesión de Obras.
40 Colaboración entre el sector público y sector privado.
7 Administrativo especial.
8 Privado.
50 Patrimonial.

SubTypeCode
1 Servicios de mantenimiento y reparación.
2 Servicios de transporte por vía terrestre, incluidos los servicios de furgones blindados y servicios de mensajería, excepto el transporte de correo.
3 Servicios de transporte aéreo: transporte de pasajeros y carga, excepto el transporte de correo.
4 Transporte de correo por vía terrestre y por vía aérea.
5 Servicios de telecomunicación.
6 Servicios financieros: a) servicios de seguros; b) servicios bancarios y de inversión.
7 Servicios de informática y servicios conexos.
8 Servicios de investigación y desarrollo.
9 Servicios de contabilidad, auditoría y teneduría de libros.
10 Servicios de investigación de estudios y encuestas de la opinión pública.
11 Servicios de consultores de dirección y servicios conexos.
12 Servicios de arquitectura; servicios de ingeniería y servicios integrados de ingeniería; servicios de planificación urbana y servicios de arquitectura paisajista. Servicios conexos de consultores en ciencia y tecnología. Servicios de ensayos y análisis técnicos.
13 Servicios de publicidad Servicios de limpieza de edificios y servicios de administración de bienes raíces.
15 Servicios editoriales y de imprenta, por tarifa o por contrato.
16 Servicios de alcantarillado y eliminación de desperdicios: servicios de saneamiento y servicios similares.
17 Servicios de hostelería y restaurante.
18 Servicios de transporte por ferrocarril.
19 Servicios de transporte fluvial y marítimo.
20 Servicios de transporte complementarios y auxiliares.
21 Servicios jurídicos.
22 Servicios de colocación y suministro de personal.
23 Servicios de investigación y seguridad, excepto los servicios de furgones blindados.
24 Servicios de educación y formación profesional.
25 Servicios sociales y de salud.
26 Servicios de esparcimiento, culturales y deportivos.
27 Otros servicios.

ResultCode
1 Adjudicado Provisionalmente.
2 Adjudicado Definitivamente.
4 Desistimiento.
5 Renuncia.
6 Desierto Provisionalmente.
7 Desierto Definitivamente.
8 Adjudicado.
9 Formalizado.
10 Licitador mejor valorado:Requerimiento de documentacion.

ProcedureCode
1 Abierto.
2 Restringido.
3 Negociado sin publicidad.
4 Negociado con publicidad.
5 Diálogo competitivo.
6 Contrato menor.
7 Derivado de acuerdo marco.
100 Normas internas.
999 Otros.
8 Concurso de proyectos.
9 Abierto simplificado.
10 Asociación para la innovación.
11 Derivado de asociación para la innovación.
12 Basado en un sistema dinámico de adquisición.
13 Licitación con negociación.

UrgencyCode
1 = Ordinaria
2 = Urgente
3 = Emergencia

{
"link": "https://contrataciondelestado.es/wps/poc?uri=deeplink:detalle_licitacion&idEvl=n509E6xCx8Gmq21uxhbaVQ%3D%3D",
"summary": "Id licitación: Mensum-2020/1; Órgano de Contratación: Junta de Gobierno Local del Ayuntamiento de Jerez; Importe: 8760.33 EUR; Estado: RES",
"title": "Suministro de juguetes para la campaña navideña en Barriadas Rurales",
"updated": "2020-01-03T13:08:40.442+01:00",
"ContractFolderID": "Mensum-2020/1",
"ContractFolderStatusCode": "RES",
"Name": "Suministro de juguetes para la campaña navideña en Barriadas Rurales",
"TypeCode": "1",
"SubTypeCode": "2",
"TotalAmount": 10600,
"TaxExclusiveAmount": 8760,
"ResultCode": "8",
"AwardDate": "2020-01-03",
"ReceivedTenderQuantity": "1",
"PartyIdentification": "B11607967",
"PartyName": "Almacenes Bahía, S.L.",
"TaxExclusiveAmount1": 8760,
"PayableAmount": 10600,
"ProcedureCode": "6",
"UrgencyCode": "1"
},

Datos del mes en curso:
https://www.hacienda.gob.es/es-ES/GobiernoAbierto/Datos%20Abiertos/Paginas/licitaciones_plataforma_contratacion.aspx
