import { Injectable } from '@angular/core';
import {ContaModel} from "./contas/conta.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private conta : ContaModel;
  constructor() { }

  setConta(conta: ContaModel){
    this.conta = conta;
  }

  getConta(){
    return this.conta
  }
}
