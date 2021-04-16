import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppVotacionesService } from "../app-votaciones.service";
import { Nominado } from "../nominado"
import { Router } from '@angular/router';

@Component({
  selector: 'app-nominados',
  templateUrl: './nominados.component.html',
  styleUrls: ['./nominados.component.css']
})
export class NominadosComponent implements OnInit {

  tokenKey: string = "app-votos-token";
  token: string = ""

  nominados: Nominado[] = []

  votar(opcion: number){
    this.appvotacionesservice.postVotar(this.token, opcion).subscribe((result)=>{
      alert("Se registró el voto")
    })
  }

  
  loadCache(){

    if (localStorage.hasOwnProperty(this.tokenKey)){
      this.token = String(localStorage.getItem(this.tokenKey))

      if (!this.token){
        this.router.navigate(["/login"])
      }
    }
    else {
      this.router.navigate(["/login"])
    }
  }

  obtenerNominadosPorEvento(){
    const evento: number = Number(this.route.snapshot.paramMap.get('evento'));
    this.appvotacionesservice.getNominados(this.token,evento)
      .subscribe(result => this.nominados = result);
  }

  constructor(private route: ActivatedRoute, private appvotacionesservice : AppVotacionesService, private router: Router ) { }

  ngOnInit(): void {
    this.loadCache()
    this.obtenerNominadosPorEvento()
  }

}
