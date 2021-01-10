import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemClientesComponent } from '../clientes/listagem-clientes/listagem-clientes.component';
import { CadastroClienteComponent } from '../clientes/cadastro-cliente/cadastro-cliente.component';
import { CadastroEnderecoComponent } from '../clientes/cadastro-endereco/cadastro-endereco.component';
import { EdicaoClientesComponent } from '../clientes/edicao-cliente/edicao-cliente.component';

const routes: Routes = [
        { path: '', pathMatch: 'full', redirectTo: '/listagem-cliente' },
        {
            path: 'listagem-cliente',
            component: ListagemClientesComponent,
            data: {
                title: 'Clientes'
            }
        },
        {
            path: 'cadastrar-cliente',
            component: CadastroClienteComponent,
            data: {
                title: 'Cadastrar Cliente'
            }
        },
        {
          path: 'cadastrar-endereco/:id',
          component: CadastroEnderecoComponent,
          data: {
              title: 'Cadastrar Endereco'
          }
        },
        {
          path: 'editar-cliente/:id',
          component: EdicaoClientesComponent,
          data: {
              title: 'Editar Cliente'
          }
        }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule {}
