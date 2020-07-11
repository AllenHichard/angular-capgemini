import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContasComponent } from './contas/contas.component';
import { RegistroComponent } from './registro/registro.component';
import { ContasService } from "./contas.service";
import { DataService } from "./data.service";
import { RegistroService } from "./registro.service";
import { HomeService } from "./home.service";
import { LoginService } from "./login.service";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    ContasComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [ContasService, HttpClientModule, RegistroService, LoginService, DataService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
