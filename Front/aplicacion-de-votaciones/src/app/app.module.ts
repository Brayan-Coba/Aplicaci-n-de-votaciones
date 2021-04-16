import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartComponent } from "angular-google-charts";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EventosComponent } from './eventos/eventos.component';
import { NominadosComponent } from './nominados/nominados.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { AppRoutingModule } from './app-routing.module';
import { TotalResultadosComponent } from './total-resultados/total-resultados.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventosComponent,
    NominadosComponent,
    ResultadosComponent,
    TotalResultadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
