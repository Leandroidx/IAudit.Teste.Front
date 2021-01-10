import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';  

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html'
})
export class CadastroClienteComponent {
  title = 'IAudit';

  constructor(private clienteService: ClienteService) { }  
  cliente: any;  

  ngOnInit(): void {  
    //this.listarClientes();  
  }  

}
