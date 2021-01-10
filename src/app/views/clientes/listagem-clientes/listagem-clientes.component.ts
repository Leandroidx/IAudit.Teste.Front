import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html'
})
export class ListagemClientesComponent {
  title = 'IAudit';

  constructor(private clienteService: ClienteService,
    private router: Router) { }  
  cliente: any;  

  ngOnInit(): void {  
    this.listarClientes();  
  }  

  listarClientes() {  
    this.clienteService.listarClientes()
      .subscribe(cliente => {
        this.cliente = cliente;
    }); 
  } 

  deletarCliente(idCliente: any)
  {
    this.clienteService.deletarCliente(idCliente)
      .subscribe(cliente => {
        this.cliente = cliente;
    })
    .add(() => {
      this.listarClientes();
    });
  }

  cadastrarCliente() {
    this.router.navigate(['/cadastrar-endereco/']);
}

  editarCliente(idCliente: any) {
    this.router.navigate([`/editar-cliente/${idCliente}`]);
  }

  adicionarEndereco(idCliente: any) {
    this.router.navigate([`/cadastrar-endereco`]);
  }

}
