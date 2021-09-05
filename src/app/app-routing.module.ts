import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './indice/indice.component';
import { PorAdjudicatarioComponent } from './pages/tables/por-adjudicatario/por-adjudicatario.component';
import { PorLicitacionComponent } from './pages/tables/por-licitacion/por-licitacion.component';
import { IndiceGraficosComponent } from './pages/graficos/indice/indice-graficos.component';
import { GeneradorGraficosComponent } from './pages/graficos/generador/generador-graficos.component';

const routes: Routes = [
	{ path: 'home', component: IndiceComponent },
	{ path: 'porAdjudicatario', component: PorAdjudicatarioComponent },
	{ path: 'porLicitacion', component: PorLicitacionComponent },
	{ path: 'indiceGraficos', component: IndiceGraficosComponent },
	{ path: 'graficos', component: GeneradorGraficosComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
