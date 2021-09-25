import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { AgChartsAngularModule } from 'ag-charts-angular';

import { DpDatePickerModule } from 'ng2-date-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/navbar/navbar.component';
import { IndiceComponent } from './indice/indice.component';

import { PorLicitacionComponent } from './pages/tables/por-licitacion/por-licitacion.component';
import { PorAdjudicatarioComponent } from './pages/tables/por-adjudicatario/por-adjudicatario.component';

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
		GeneradorGraficosComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule,
		AgGridModule.withComponents([]),
		AgChartsAngularModule,
		DpDatePickerModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
