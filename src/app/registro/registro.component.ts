import { Component, OnInit } from '@angular/core';
import { RegistroService } from "../registro.service";
import {ContaModel} from "../contas/conta.model";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  conta: ContaModel = new ContaModel();
  constructor(private registroService: RegistroService) { }

  ngOnInit(): void { 
    
  }


  cadastrar(){
    //console.log(this.conta)
    this.registroService.cadastrarUsuario(this.conta).subscribe(
      conta=>{
        this.conta = new ContaModel();
      }, err=> {
        console.log("erro ao cadastrar uma conta")
      }
    )
  }

}
