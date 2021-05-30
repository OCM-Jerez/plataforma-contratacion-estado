Bajar fichero zip
Descomprimir
Arrastrar fichero a VScode
en comandos Fold level 3
Buscar 
Órgano de Contratación: Junta de Gobierno Local del Ayuntamiento de Jerez
Copio entre   <entry></entry>
Pego en el fichero txt donde voy recopilando entradas.
https://codebeautify.org/xmltojson
Copio todo el contenido del fichero txt
Lo pego en la WEB
Copio todo el resultado de la conversión en la WEB
Lo pego en el fichero json que estoy creando
crtl + alt + v para comnprobar json valido
Borro:
     {
      "entry":
Borro ultima { 
crtl + alt + v para comnprobar json valido




Iterar con map() en RunJS
Copiar el json.
lici = []

const result = lici.map((elem) => {
		if (Array.isArray(elem.ContractFolderStatus.TenderResult)) {
			return {
			 	id: elem.ContractFolderStatus.ContractFolderID,
      	status: elem.ContractFolderStatus.ContractFolderStatusCode,
				titulo: elem.title,
			 // objeto: elem.ContractFolderStatus.ProcurementProject.Name,
				sinIVA: elem.ContractFolderStatus.ProcurementProject.BudgetAmount.TaxExclusiveAmount,
				fecha: elem.ContractFolderStatus.TenderResult[0].AwardDate,
				CIF: elem.ContractFolderStatus.TenderResult[0].WinningParty.PartyIdentification.ID,
     		adjudicatario: elem.ContractFolderStatus.TenderResult[0].WinningParty.PartyName.Name,
     		CIF1: elem.ContractFolderStatus.TenderResult[1].WinningParty.PartyIdentification.ID,
     		adjudicatario1: elem.ContractFolderStatus.TenderResult[1].WinningParty.PartyName.Name,
     		// CIF2: elem.ContractFolderStatus.TenderResult[2].WinningParty.PartyIdentification.ID,
     		// Adjudicatario2: elem.ContractFolderStatus.TenderResult[2].WinningParty.PartyName.Name,
				// fecha1: elem.ContractFolderStatus.ValidNoticeInfo.AdditionalPublicationStatus.AdditionalPublicationDocumentReference[0].IssueDate,
				// URL:  elem.ContractFolderStatus.ValidNoticeInfo.AdditionalPublicationStatus.AdditionalPublicationDocumentReference[1].Attachment.ExternalReference.URI
			};
		} else {
			return {
       	id: elem.ContractFolderStatus.ContractFolderID,
      	status: elem.ContractFolderStatus.ContractFolderStatusCode,
				titulo: elem.title,
			 // objeto: elem.ContractFolderStatus.ProcurementProject.Name,
				sinIVA: elem.ContractFolderStatus.ProcurementProject.BudgetAmount.TaxExclusiveAmount,
				fecha: elem.ContractFolderStatus.TenderResult.AwardDate,
				CIF: elem.ContractFolderStatus.TenderResult.WinningParty.PartyIdentification.ID,
     		adjudicatario: elem.ContractFolderStatus.TenderResult.WinningParty.PartyName.Name,
				// fecha1: elem.ContractFolderStatus.ValidNoticeInfo.AdditionalPublicationStatus.AdditionalPublicationDocumentReference[0].IssueDate,
				// URL:  elem.ContractFolderStatus.ValidNoticeInfo.AdditionalPublicationStatus.AdditionalPublicationDocumentReference[1].Attachment.ExternalReference.URI
			};
		}
	});

	console.log(result);


Problemas:
Lo genera sin comillas en la key y con comilla simple en value.
 {
    id: 'ASUECO-2020/3415',
    status: 'RES',
    titulo: 'Suministro avituallamiento voluntarios RR.MM. 2021. Navidad 2020-2021',
    sinIVA: 448,
    fecha: '2020-12-30',
    CIF: '31600002A',
    Adjudicatario: 'MANUEL RAMIREZ SANCHEZ'
  },

 {
    "id": "ASUECO-2020/3415",
    "status": "RES",
    "titulo": "Suministro avituallamiento voluntarios RR.MM. 2021. Navidad 2020-2021",
    "sinIva": 448,
    "fecha": "2020-12-30",
    "CIF": "31600002A",
    "Adjudicatario": "MANUEL RAMIREZ SANCHEZ"
  },


Cuando hay varios adjudicatarios, tengo que iterar sobre su array conociendo la cantidad de ellos.
Crear un objeto para cada uno de ellos, en la tabla mostrare una misma licitación con los diferentes adjudicatarios.

Separador decimales es .



