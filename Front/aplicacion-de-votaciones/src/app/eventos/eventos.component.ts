import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppVotacionesService } from "../app-votaciones.service";
import { Evento } from "../eventos";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  tokenKey: string = "app-votos-token";
  tokenRoles: string = "app-votos-roles";
  token: string = ""

  roles: string[] = []
  eventos: Evento[] = []

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

  cargarEventos(){
    if (this.roles.includes("Participante")){
      this.appvotacionesservice.getEventos(this.token).subscribe((result)=>{
        this.eventos = result
      })
    }
  }

  constructor(private appvotacionesservice : AppVotacionesService, private router: Router) { }

  ngOnInit(): void {
    this.loadCache()
    this.cargarEventos()
  }

}
