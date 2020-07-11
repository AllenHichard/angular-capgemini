import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs'; 
import { ContaModel } from './contas/conta.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  cadastrarUsuario(conta: ContaModel): Observable<any>{
    return this.http.post("https://apirest-capgemini.herokuapp.com/api/CriarUsuario", conta);
  }

}
