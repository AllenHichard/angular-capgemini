import { Component, OnInit } from '@angular/core';
import { ContasService } from "../contas.service"
import {ContaModel} from "./conta.model"
@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})

//ng g s/c alunos (serviço/componente)
export class ContasComponent implements OnInit {
  conta: ContaModel = new ContaModel();
  contas: Array<any> = new Array();

  constructor(private contasService: ContasService) { }

  ngOnInit(): void {
    this.listarContas();
  }


  atualizar(id: number){
    this.conta.id = id
    this.contasService.atualizarConta(id, this.conta).subscribe(
      aluno=>{
        this.conta = new ContaModel();
        this.listarContas();
      }, err=> {
        console.log("erro ao atualizar a conta")
      }
    )
  }

  remover(id:number){
    this.contasService.removerConta(id,  this.conta).subscribe(
      aluno=>{
        this.conta = new ContaModel();
        this.listarContas();
      }, err=> {
        console.log("erro ao remover a conta")
      }
    )
  }


  cadastrar(){
    console.log(this.conta)
    this.contasService.cadastrarConta(this.conta).subscribe(
      aluno=>{
        this.conta = new ContaModel();
        this.listarContas();
      }, err=> {
        console.log("erro ao cadastrar uma conta")
      }
    )
  }

  listarContas(){
    this.contasService.listarContas().subscribe(
      contas =>  {
        this.contas = contas;
      }, err =>{
        console.log("Erro ao listar as contas", err);
      }
    )
  }

}
