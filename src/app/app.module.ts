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
import { IndiceGraficosComponent } from './pages/graficos/indice/indice-graficos.component';
import { GeneradorGraficosComponent } from './pages/graficos/generador/generador-graficos.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		IndiceComponent,
		IndiceGraficosComponent,
		PorLicitacionComponent,
		PorAdjudicatarioComponent,
		PorCIFComponent,
		GeneradorGraficosComponent
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
