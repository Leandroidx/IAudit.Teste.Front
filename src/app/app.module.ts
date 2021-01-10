import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ClienteService } from '../app/services/cliente.service';  

import { AppRoutingModule } from './app.routing';
import { ClientesModule } from './views/clientes/clientes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule }    from '@angular/common/http';  
import { AppComponent } from './app.component';
import { ListagemClientesComponent } from '../app/views/clientes/listagem-clientes/listagem-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    ListagemClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule ,
    ClientesModule,
    AppRoutingModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
