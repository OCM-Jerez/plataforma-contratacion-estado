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
import { AgChartsAngularModule } from 'ag-charts-angular';
import { PorImporteComponent } from './pages/graficos/por-code/por-importe/por-importe.component';
import { PorTypecodeComponent } from './pages/graficos/por-code/por-typecode/por-typecode.component';
import { PorSubtypecodeComponent } from './pages/graficos/por-code/por-subtypecode/por-subtypecode.component';
import { PorResultcodeComponent } from './pages/graficos/por-code/por-resultcode/por-resultcode.component';
import { PorProcedurecodeComponent } from './pages/graficos/por-code/por-procedurecode/por-procedurecode.component';
import { PorUrgencycodeComponent } from './pages/graficos/por-code/por-urgencycode/por-urgencycode.component';
import { IndiceGraficosComponent } from './pages/graficos/indice-graficos/indice-graficos.component';
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
		PorImporteComponent,
		PorTypecodeComponent,
		PorSubtypecodeComponent,
		PorResultcodeComponent,
		PorProcedurecodeComponent,
		PorUrgencycodeComponent,
		IndiceGraficosComponent,
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
