import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppVotacionesService } from "../app-votaciones.service";
import { Resultado } from "../resultado"

@Component({
  selector: 'app-total-resultados',
  templateUrl: './total-resultados.component.html',
  styleUrls: ['./total-resultados.component.css']
})
export class TotalResultadosComponent implements OnInit {

  resultadosAgrupados: Map<number, Resultado[] | undefined> = new Map<number, Resultado[]>();

  tokenKey: string = "app-votos-token";
  tokenRoles: string = "app-votos-roles";
  resultado: Resultado[] = []
  token: string = ""
  roles: string[] = []
  gruposDeResultados: Resultado[][] = []

  loadCache(){

    if (localStorage.hasOwnProperty(this.tokenKey)){
      this.token = String(localStorage.getItem(this.tokenKey))
      this.roles = JSON.parse(String(localStorage.getItem(this.tokenRoles)))
      if (!this.token){
        this.router.navigate(["/login"])
      }
    }
    else {
      this.router.navigate(["/login"])
    }
  }

  cargarResultados(){
    if (this.roles.includes("Auditor")){
      this.appvotacionesservice.getResultados(this.token).subscribe((result)=>{
        this.resultado = result

        result.forEach((element: Resultado)=> {
          if (this.resultadosAgrupados.has(element.id_Evento)) {

              let resultadoPorEvento: Resultado[] | undefined = this.resultadosAgrupados.get(element.id_Evento)
            
              if(resultadoPorEvento){
                resultadoPorEvento.push(element)
                this.resultadosAgrupados.set(element.id_Evento, resultadoPorEvento)
              }
          }
          else {
            let resultadoPorEvento: Resultado[] = []
            resultadoPorEvento.push(element)
            this.resultadosAgrupados.set(element.id_Evento, resultadoPorEvento)
          }
        });
        this.resultadosAgrupados.forEach((value,key,map) => {
          if (value){
            this.gruposDeResultados.push(value)
          }
        });
      })
    }
  }

  constructor(private appvotacionesservice : AppVotacionesService, private router: Router) { }

  ngOnInit(): void {
    this.loadCache()
    this.cargarResultados()
  }

}
