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
  DatosComponent
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
