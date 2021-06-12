import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './indice/indice.component';
import { PorAdjudicatarioComponent } from './pages/por-adjudicatario/por-adjudicatario.component';
import { PorCIFComponent } from './pages/por-cif/por-cif.component';
import { PorLicitacionComponent } from './pages/por-licitacion/por-licitacion.component';

const routes: Routes = [
	{ path: 'home', component: IndiceComponent },
	{ path: 'porLicitacion', component: PorLicitacionComponent },
	{ path: 'porAdjudicatario', component: PorAdjudicatarioComponent },
  { path: 'porCIF', component: PorCIFComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
