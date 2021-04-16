import { Component, OnInit, Input } from '@angular/core';


import { Resultado } from "../resultado"

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  @Input() result : Resultado[] = [];

  title: string = ""

  data : any[] = [];
  
  constructor() { }

  getData() : void {
    this.result.forEach((element:Resultado) => {
      let dato = [element.Nominado, element.Votos]
      this.data.push(dato)
    });
  }

  ngOnInit(): void {
    this.getData()
    if (this.result[0]){
      this.title = this.result[0].Evento
    }
  }
}
