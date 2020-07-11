import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs'; 
import { ContaModel } from './contas/conta.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }

  login (conta: ContaModel): Observable<any>{
    return this.http.post("https://apirest-capgemini.herokuapp.com/api/procurarUsuario", conta);
  }
  

}
