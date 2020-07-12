import { Component, OnInit } from '@angular/core';
import {ContaModel} from "../contas/conta.model";
import { LoginService } from "../login.service";
import { async } from 'rxjs/internal/scheduler/async';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  visible: boolean = false;
  formulario: FormGroup;

  conta: ContaModel = new ContaModel();
  
  constructor(private loginService: LoginService, private router: Router,
              private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /*this.formulario = new FormGroup({
      cpf: new FormControl(null),
      senha: new FormControl(null),
    });*/
    
    this.formulario = this.formBuilder.group({
      //null = valor inicial; 
      cpf: [null, 
              [
                Validators.required,
                Validators.maxLength(11),
                Validators.minLength(11)
              ]
            ],
      senha: [null, 
                [
                  Validators.required,
                  Validators.minLength(1)
                ]
              ]
      //email [Validators.required, Validators.email]
    });
  }

  

  async onSubmit(){
    //console.log(this.formulario)
    
    await this.loginService.login(this.formulario.value)
      .toPromise()
      .then(res => {
        console.log(res)
        if(res.email != null){
          this.usuarioAutenticado = true;
          this.router.navigate(["/home"])
          this.dataService.setConta(res)
        }
        else {
          this.usuarioAutenticado = false;
          this.conta = new ContaModel();
          this.dataService.setConta(this.conta)
          this.visible = true
        }
        this.formulario.reset();
      })
      .catch(error => {  
        this.usuarioAutenticado = false;
        console.log("erro ao realizar login uma conta") 
        this.conta = new ContaModel();
        this.dataService.setConta(this.conta)
      });
    console.log(this.conta)
    console.log(this.usuarioAutenticado)
  }

  get senha() { return this.formulario.get('senha'); }

  get cpf() { return this.formulario.get('cpf'); }

  



}
