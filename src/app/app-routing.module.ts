import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './indice/indice.component';
import { PorAdjudicatarioComponent } from './pages/por-adjudicatario/por-adjudicatario.component';
import { PorCIFComponent } from './pages/por-cif/por-cif.component';
import { PorLicitacionComponent } from './pages/por-licitacion/por-licitacion.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { ImporteComponent } from './pages/graficos/importe/importe.component';
import { SumaImportesPorRangoComponent } from './pages/graficos/suma-importes-por-rango/suma-importes-por-rango.component';
import { IndiceGraficosComponent } from './indice-graficos/indice-graficos.component';
import { GraficosPorProcedimientoComponent } from './pages/graficos/graficos-por-procedimiento/graficos-por-procedimiento.component';
import { GraficosPorResultcodeComponent } from './pages/graficos/graficos-por-resultcode/graficos-por-resultcode.component';
import { GraficosPorTypecodeComponent } from './pages/graficos/graficos-por-typecode/graficos-por-typecode.component';
import { GraficosPorSubtypecodeComponent } from './pages/graficos/graficos-por-subtypecode/graficos-por-subtypecode.component';
import { GraficosPorUrgencycodeComponent } from './pages/graficos/graficos-por-urgencycode/graficos-por-urgencycode.component';

const routes: Routes = [
	{ path: 'home', component: IndiceComponent },
	{ path: 'porLicitacion', component: PorLicitacionComponent },
	{ path: 'porAdjudicatario', component: PorAdjudicatarioComponent },
	{ path: 'porCIF', component: PorCIFComponent },
	{ path: 'indiceGraficos', component: IndiceGraficosComponent },
	{ path: 'graficosPorImporte', component: GraficosComponent },
	{ path: 'graficosPorProcedimiento', component: GraficosPorProcedimientoComponent },
	{ path: 'graficosPorResultcode', component: GraficosPorResultcodeComponent },
	{ path: 'graficosPorTypecode', component: GraficosPorTypecodeComponent },
	{ path: 'graficosPorSubTypeCode', component: GraficosPorSubtypecodeComponent },
	{ path: 'graficosPorUrgencyCode', component: GraficosPorUrgencycodeComponent },

	{ path: 'importe', component: ImporteComponent },
	{ path: 'sumaImporte', component: SumaImportesPorRangoComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
