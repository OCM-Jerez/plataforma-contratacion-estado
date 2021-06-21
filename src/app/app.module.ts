import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { IndiceComponent } from './indice/indice.component';
import { PorLicitacionComponent } from './pages/tables/por-licitacion/por-licitacion.component';
import { PorAdjudicatarioComponent } from './pages/tables/por-adjudicatario/por-adjudicatario.component';
import { PorCIFComponent } from './pages/tables/por-cif/por-cif.component';
import { GraficosPorImporteComponent } from './pages/graficos/container2Graphs/graficos-por-importe/graficos-por-importe.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { PorImporteComponent } from './pages/graficos/por-code/por-importe/por-importe.component';
import { SumaImportesPorRangoComponent } from './pages/graficos/por-codeSum/suma-importes-por-rango/suma-importes-por-rango.component';
import { PorTypecodeComponent } from './pages/graficos/por-code/por-typecode/por-typecode.component';
import { SumaImportesPorTypecodeComponent } from './pages/graficos/por-codeSum/suma-importes-por-typecode/suma-importes-por-typecode.component';
import { PorSubtypecodeComponent } from './pages/graficos/por-code/por-subtypecode/por-subtypecode.component';
import { SumaImportesPorSubtypecodeComponent } from './pages/graficos/por-codeSum/suma-importes-por-subtypecode/suma-importes-por-subtypecode.component';
import { PorResultcodeComponent } from './pages/graficos/por-code/por-resultcode/por-resultcode.component';
import { SumaImportesPorResultcodeComponent } from './pages/graficos/por-codeSum/suma-importes-por-resultcode/suma-importes-por-resultcode.component';
import { PorProcedurecodeComponent } from './pages/graficos/por-code/por-procedurecode/por-procedurecode.component';
import { SumaImportesPorProcedurecodeComponent } from './pages/graficos/por-codeSum/suma-importes-por-procedurecode/suma-importes-por-procedurecode.component';
import { PorUrgencycodeComponent } from './pages/graficos/por-code/por-urgencycode/por-urgencycode.component';
import { SumaImportesPorUrgencycodeComponent } from './pages/graficos/por-codeSum/suma-importes-por-urgencycode/suma-importes-por-urgencycode.component';
import { IndiceGraficosComponent } from './pages/graficos/indice-graficos/indice-graficos.component';
import { GraficosPorProcedimientoComponent } from './pages/graficos/container2Graphs/graficos-por-procedimiento/graficos-por-procedimiento.component';
import { GraficosPorResultcodeComponent } from './pages/graficos/container2Graphs/graficos-por-resultcode/graficos-por-resultcode.component';
import { GraficosPorTypecodeComponent } from './pages/graficos/container2Graphs/graficos-por-typecode/graficos-por-typecode.component';
import { GraficosPorSubtypecodeComponent } from './pages/graficos/container2Graphs/graficos-por-subtypecode/graficos-por-subtypecode.component';
import { GraficosPorUrgencycodeComponent } from './pages/graficos/container2Graphs/graficos-por-urgencycode/graficos-por-urgencycode.component';
import { PorcodeComponent } from './pages/graficos/por-code/porcode/porcode.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		IndiceComponent,
		PorLicitacionComponent,
		PorAdjudicatarioComponent,
		PorCIFComponent,
		GraficosPorImporteComponent,
		PorImporteComponent,
		SumaImportesPorRangoComponent,
		PorTypecodeComponent,
		SumaImportesPorTypecodeComponent,
		PorSubtypecodeComponent,
		SumaImportesPorSubtypecodeComponent,
		PorResultcodeComponent,
		SumaImportesPorResultcodeComponent,
		PorProcedurecodeComponent,
		SumaImportesPorProcedurecodeComponent,
		PorUrgencycodeComponent,
		SumaImportesPorUrgencycodeComponent,
		IndiceGraficosComponent,
		GraficosPorProcedimientoComponent,
		GraficosPorResultcodeComponent,
		GraficosPorTypecodeComponent,
		GraficosPorSubtypecodeComponent,
		GraficosPorUrgencycodeComponent,
		PorcodeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AgGridModule.withComponents([]),
		HttpClientModule,
		AgChartsAngularModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
