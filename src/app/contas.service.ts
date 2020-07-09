import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { ContaModel } from './contas/conta.model';

import {environment} from "./../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor(private http: HttpClient) { 
  }

  cadastrarConta(conta: ContaModel): Observable<any>{
    return this.http.post(environment.apiUrl.concat("/conta"), conta);
  }

  listarContas() : Observable<any>{
    return this.http.get(environment.apiUrl.concat("/contas"));
  }

  atualizarConta(id: any, conta: ContaModel  ) : Observable<any>{
    //return this.http.put("https://apirest-capgemini.herokuapp.com/api/conta".concat(id), conta);
    return this.http.put(environment.apiUrl.concat("/conta"), conta);
  }

  removerConta(id: any, conta: ContaModel) : Observable<any>{
    //return this.http.delete("https://apirest-capgemini.herokuapp.com/api/contas".concat(id));
    //https://www.it-swarm.dev/pt/angular/corpo-do-pedido-http.delete-em-angular2/827135012/
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id,
      },
    };
    console.log("chegou")
    return this.http.delete(environment.apiUrl.concat("/conta"), options);
  }



}
