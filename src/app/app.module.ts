import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import 'ag-grid-enterprise';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { AgGridModule } from 'ag-grid-angular';
import { DpDatePickerModule } from 'ng2-date-picker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { GeneradorGraficosComponent } from './pages/graficos/generador/generador-graficos.component';
import { HeaderComponent } from './layouts/navbar/navbar.component';
import { IndiceComponent } from './indice/indice.component';
import { IndiceGraficosComponent } from './pages/graficos/indice/indice-graficos.component';
import { PorAdjudicatarioComponent } from './pages/tables/por-adjudicatario/por-adjudicatario.component';
import { PorLicitacionComponent } from './pages/tables/por-licitacion/por-licitacion.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		GeneradorGraficosComponent,
		HeaderComponent,
		IndiceComponent,
		IndiceGraficosComponent,
		PorAdjudicatarioComponent,
		PorLicitacionComponent,
	],
	imports: [
		CommonModule,
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		AgChartsAngularModule,
		AgGridModule.withComponents([]),
		DpDatePickerModule,

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
