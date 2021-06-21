import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './indice/indice.component';
import { PorAdjudicatarioComponent } from './pages/tables/por-adjudicatario/por-adjudicatario.component';
import { PorCIFComponent } from './pages/tables/por-cif/por-cif.component';
import { PorLicitacionComponent } from './pages/tables/por-licitacion/por-licitacion.component';
import { IndiceGraficosComponent } from './pages/graficos/indice-graficos/indice-graficos.component';
import { GraficosPorProcedimientoComponent } from './pages/graficos/container2Graphs/graficos-por-procedimiento/graficos-por-procedimiento.component';
import { GraficosPorResultcodeComponent } from './pages/graficos/container2Graphs/graficos-por-resultcode/graficos-por-resultcode.component';
import { GraficosPorTypecodeComponent } from './pages/graficos/container2Graphs/graficos-por-typecode/graficos-por-typecode.component';
import { GraficosPorSubtypecodeComponent } from './pages/graficos/container2Graphs/graficos-por-subtypecode/graficos-por-subtypecode.component';
import { GraficosPorUrgencycodeComponent } from './pages/graficos/container2Graphs/graficos-por-urgencycode/graficos-por-urgencycode.component';
import { GraficosPorImporteComponent } from './pages/graficos/container2Graphs/graficos-por-importe/graficos-por-importe.component';
import { PorcodeComponent } from './pages/graficos/por-code/porcode/porcode.component';

const routes: Routes = [
	{ path: 'home', component: IndiceComponent },
	{ path: 'porLicitacion', component: PorLicitacionComponent },
	{ path: 'porAdjudicatario', component: PorAdjudicatarioComponent },
	{ path: 'porCIF', component: PorCIFComponent },
	{ path: 'indiceGraficos', component: IndiceGraficosComponent },
	// { path: 'graficosPorImporte', component: GraficosPorImporteComponent },
	{ path: 'graficosPorImporte', component: PorcodeComponent },
	{ path: 'graficosPorProcedimiento', component: PorcodeComponent },
	{ path: 'graficosPorResultcode', component: GraficosPorResultcodeComponent },
	{ path: 'graficosPorTypecode', component: GraficosPorTypecodeComponent },
	{ path: 'graficosPorSubTypeCode', component: GraficosPorSubtypecodeComponent },
	{ path: 'graficosPorUrgencyCode', component: GraficosPorUrgencycodeComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
