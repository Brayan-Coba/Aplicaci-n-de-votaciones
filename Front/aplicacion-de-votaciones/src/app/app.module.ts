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
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

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
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
