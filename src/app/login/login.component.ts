import { Component, OnInit } from '@angular/core';
import {ContaModel} from "../contas/conta.model";
import { LoginService } from "../login.service";
import { async } from 'rxjs/internal/scheduler/async';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuarioAutenticado: boolean = false;
  conta: ContaModel = new ContaModel();
  constructor(private loginService: LoginService, private router: Router,
              private dataService: DataService) { }

  ngOnInit(): void {
  }

  async login(){
    await this.loginService.login(this.conta)
      .toPromise()
      .then(res => {
        if(res.email != ""){
          this.usuarioAutenticado = true;
          this.router.navigate(["/home"])
          this.dataService.setConta(res)
        }
        else {
          this.usuarioAutenticado = false;
          this.conta = new ContaModel();
          this.dataService.setConta(this.conta)
        }
      })
      .catch(error => {  
        this.usuarioAutenticado = false;
        console.log("erro ao realizar login uma conta") 
        this.conta = new ContaModel();
        this.dataService.setConta(this.conta)
      });
    //console.log(this.usuarioAutenticado)
  }

}
