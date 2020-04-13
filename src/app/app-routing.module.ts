import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { RestauranteComponent } from './restaurante/restaurante.component'
import { DiversaoComponent } from './diversao/diversao.component'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'prefix'},
  {path: 'home', component: HomeComponent},
  {path: 'restaurantes', component: RestauranteComponent},
  {path: 'diversao', component: DiversaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
