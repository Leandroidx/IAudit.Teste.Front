import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemClientesComponent } from '../app/views/clientes/listagem-clientes/listagem-clientes.component';


const routes: Routes = [
    { path: '', component: ListagemClientesComponent}
    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
