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
import { PorLicitacionComponent } from './pages/por-licitacion/por-licitacion.component';
import { PorAdjudicatarioComponent } from './pages/por-adjudicatario/por-adjudicatario.component';
import { PorCIFComponent } from './pages/por-cif/por-cif.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { ImporteComponent } from './pages/graficos/importe/importe.component';
import { DatosComponent } from './pages/graficos/datos/datos.component';
import { SumaImportesPorRangoComponent } from './pages/graficos/suma-importes-por-rango/suma-importes-por-rango.component';
import { PorTypecodeComponent } from './pages/graficos/por-typecode/por-typecode.component';
import { SumaImportesPorTypecodeComponent } from './pages/graficos/suma-importes-por-typecode/suma-importes-por-typecode.component';
import { PorSubtypecodeComponent } from './pages/graficos/por-subtypecode/por-subtypecode.component';
import { SumaImportesPorSubtypecodeComponent } from './pages/graficos/suma-importes-por-subtypecode/suma-importes-por-subtypecode.component';
import { PorResultcodeComponent } from './pages/graficos/por-resultcode/por-resultcode.component';
import { SumaImportesPorResultcodeComponent } from './pages/graficos/suma-importes-por-resultcode/suma-importes-por-resultcode.component';
import { PorProcedurecodeComponent } from './pages/graficos/por-procedurecode/por-procedurecode.component';
import { SumaImportesPorProcedurecodeComponent } from './pages/graficos/suma-importes-por-procedurecode/suma-importes-por-procedurecode.component';
import { PorUrgencycodeComponent } from './pages/graficos/por-urgencycode/por-urgencycode.component';
import { SumaImportesPorUrgencycodeComponent } from './pages/graficos/suma-importes-por-urgencycode/suma-importes-por-urgencycode.component';
import { IndiceGraficosComponent } from './indice-graficos/indice-graficos.component';
import { GraficosPorProcedimientoComponent } from './pages/graficos/graficos-por-procedimiento/graficos-por-procedimiento.component';
import { GraficosPorResultcodeComponent } from './pages/graficos/graficos-por-resultcode/graficos-por-resultcode.component';
import { GraficosPorTypecodeComponent } from './pages/graficos/graficos-por-typecode/graficos-por-typecode.component';
import { GraficosPorSubtypecodeComponent } from './pages/graficos/graficos-por-subtypecode/graficos-por-subtypecode.component';
import { GraficosPorUrgencycodeComponent } from './pages/graficos/graficos-por-urgencycode/graficos-por-urgencycode.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		IndiceComponent,
		PorLicitacionComponent,
		PorAdjudicatarioComponent,
		PorCIFComponent,
		GraficosComponent,
		ImporteComponent,
		DatosComponent,
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
  GraficosPorUrgencycodeComponent
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
