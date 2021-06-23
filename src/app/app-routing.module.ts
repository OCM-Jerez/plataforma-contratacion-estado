import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './indice/indice.component';
import { PorAdjudicatarioComponent } from './pages/tables/por-adjudicatario/por-adjudicatario.component';
import { PorCIFComponent } from './pages/tables/por-cif/por-cif.component';
import { PorLicitacionComponent } from './pages/tables/por-licitacion/por-licitacion.component';
import { IndiceGraficosComponent } from './pages/graficos/indice/indice-graficos.component';
import { GeneradorGraficosComponent } from './pages/graficos/generador/generador-graficos.component';

const routes: Routes = [
	{ path: 'home', component: IndiceComponent },
	{ path: 'porLicitacion', component: PorLicitacionComponent },
	{ path: 'porAdjudicatario', component: PorAdjudicatarioComponent },
	{ path: 'porCIF', component: PorCIFComponent },
	{ path: 'indiceGraficos', component: IndiceGraficosComponent },
	{ path: 'graficosPorImporte', component: GeneradorGraficosComponent },
	{ path: 'graficosPorProcedimiento', component: GeneradorGraficosComponent },
	{ path: 'graficosPorResultcode', component: GeneradorGraficosComponent },
	{ path: 'graficosPorTypecode', component: GeneradorGraficosComponent },
	{ path: 'graficosPorSubTypeCode', component: GeneradorGraficosComponent },
	{ path: 'graficosPorUrgencyCode', component: GeneradorGraficosComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
