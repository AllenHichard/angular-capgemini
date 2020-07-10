import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContasComponent } from './contas/contas.component';
import { ContasService } from "./contas.service";
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ContasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [ContasService, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
