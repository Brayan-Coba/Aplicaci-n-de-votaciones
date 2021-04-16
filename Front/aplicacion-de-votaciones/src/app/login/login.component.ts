import { Component, OnInit } from '@angular/core';
import {loginData} from "../usuario";
import { AppVotacionesService } from "../app-votaciones.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appvotacionesservice : AppVotacionesService, private router: Router) { }

  ngOnInit(): void {
    this.loadToken()
  }
  tokenKey: string = "app-votos-token";
  tokenRoles: string = "app-votos-roles";
  token: string = "";

  usuario: loginData = {
    user: ""
  }

  roles: string[] = []

  loadToken(){
    if (localStorage.hasOwnProperty(this.tokenKey)){
      this.token = String(localStorage.getItem(this.tokenKey))
    }
    else {
      this.token = "";
      this.roles = [];
    }
  }

  onLogin(usuario: loginData){
    this.appvotacionesservice.login(usuario).subscribe((response) => {
      this.token = response[0].token
      localStorage.setItem(this.tokenKey, JSON.stringify(this.token))
      response.forEach( (element: any) => {
        this.roles.push(element.Rol)
      });
      alert(JSON.stringify(this.roles))
      localStorage.setItem(this.tokenRoles ,JSON.stringify(this.roles))
      this.router.navigate(["/eventos"])
    })
  }

  onLogout(){
    this.token = "";
    this.roles = [];
    localStorage.removeItem(this.tokenKey)
    localStorage.removeItem(this.tokenRoles)
    this.router.navigate(["/login"])
  }
}
