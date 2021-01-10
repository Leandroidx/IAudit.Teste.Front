import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';  

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html'
})
export class CadastroEnderecoComponent {
  title = 'IAudit';

  constructor(private clienteService: ClienteService) { }  
  cliente: any;  

  ngOnInit(): void {  
    //this.listarClientes();  
  }  

}
