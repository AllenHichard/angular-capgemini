import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ContaModel } from '../contas/conta.model';
import { HomeService } from "../home.service";
import {OperacaoModel} from "./operacao.model"
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  conta = new ContaModel();
  movimentacao: OperacaoModel = new OperacaoModel();
  mov: Array<any> = new Array();
  operacoes: Array<any> = new Array();

  constructor(private dataService: DataService, private homeService: HomeService,
              private router: Router ) { }

  ngOnInit(): void {
    this.conta = this.dataService.getConta();
    if(this.conta == null){
     // console.log("Carrege Perfil");
      this.paginaLogin()
      return
    } else{
      this.listarTiposValores();
    }
    //;
    
  }

  paginaLogin(){
    this.router.navigate([""])
  }

  listarTiposValores(){
    this.mov = this.conta.movimentacao.substring(0, this.conta.movimentacao.length-1).split(";");
    for(let i = 0; i < this.mov.length; i++){
      let elementoOperacao = new OperacaoModel();
      if(i%2==0){
        elementoOperacao.operacao = this.mov[i]
        elementoOperacao.valor = this.mov[i+1]
        this.operacoes.push(elementoOperacao);
      }
      
    } 
    
  }

  async depositar(valor:number){
    await this.homeService.depositar(valor, this.conta)
    .toPromise()
    .then(res => {
        let elementoOperacao = new OperacaoModel();
        this.conta = res;
        elementoOperacao.operacao = "Deposito"
        elementoOperacao.valor = valor
        this.operacoes.push(elementoOperacao);
      })
      .catch(error => {  
        console.log("erro ao depositar") 
        
      });
      this.movimentacao = new OperacaoModel();
  }

  async sacar(valor:number){
    let elementoOperacao = new OperacaoModel();
    if(parseFloat(this.conta.saldo) < valor){
      elementoOperacao.operacao = "Insuficiente"
      elementoOperacao.valor = -1;
      this.operacoes.push(elementoOperacao);
    }
    else{
      this.homeService.sacar(valor, this.conta).subscribe(
        conta=>{
          this.conta = conta;
          elementoOperacao.operacao = "Saque"
          elementoOperacao.valor = valor
          this.operacoes.push(elementoOperacao);
        }, err=> {
          console.log("erro ao depositar")
        }
      )
    }
    this.movimentacao = new OperacaoModel();
  }

  configData(){
      let now = new Date();
      let dia=now.getDate();
      let mes=now.getMonth() + 1;
      let ano=now.getFullYear();
      let h=now.getHours();
      let m=now.getMinutes();
      let s=now.getSeconds();
     return dia+"-"+mes+"-"+ano+"-"+h+"-"+m+"-"+s;
  }

}
