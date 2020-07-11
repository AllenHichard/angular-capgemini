import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';  
import { ContaModel } from './contas/conta.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  depositar(valor: any, conta: ContaModel): Observable<any>{
    return this.http.post("https://apirest-capgemini.herokuapp.com/api/depositar/".concat(valor), conta);
  }

  sacar(valor: any, conta: ContaModel): Observable<any>{
    return this.http.post("https://apirest-capgemini.herokuapp.com/api/sacar/".concat(valor), conta);
  }
}
