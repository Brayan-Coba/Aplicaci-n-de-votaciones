import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component'
import { NominadosComponent } from './nominados/nominados.component'
import { TotalResultadosComponent } from "./total-resultados/total-resultados.component"

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'nominados/:evento', component: NominadosComponent },
  { path: 'resultados', component: TotalResultadosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}