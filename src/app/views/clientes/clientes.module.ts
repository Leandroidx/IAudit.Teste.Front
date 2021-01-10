import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { CadastroClienteComponent } from '../clientes/cadastro-cliente/cadastro-cliente.component';
import { CadastroEnderecoComponent } from '../clientes/cadastro-endereco/cadastro-endereco.component';
import { EdicaoClientesComponent } from '../clientes/edicao-cliente/edicao-cliente.component';
import { ClientesRoutingModule } from '../clientes/clientes-routing.module';

@NgModule({
    declarations: [
        CadastroClienteComponent,
        CadastroEnderecoComponent,
        EdicaoClientesComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ClientesRoutingModule
    ]
})
export class ClientesModule {}
