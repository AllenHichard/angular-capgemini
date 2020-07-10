import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {AppComponent} from "./app.component"
import{LoginComponent} from "./login/login.component"
import {ContasComponent} from "./contas/contas.component"
import {RegistroComponent} from "./registro/registro.component"
import {HomeComponent} from "./home/home.component"

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "contas", component: ContasComponent},
  {path: "registro", component: RegistroComponent},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
