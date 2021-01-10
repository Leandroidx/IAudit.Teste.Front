import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';  
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Cliente from 'src/app/models/cliente.Models';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html'
})
export class CadastroClienteComponent {
  title = 'IAudit';

  constructor(private clienteService: ClienteService, 
    private route: ActivatedRoute,
    private router: Router) { }  
  cliente: Cliente;  
  clienteEnderecos: any;  
  ClienteForm: FormGroup;  
  postado = false;   

  ngOnInit(): void {  

    this.ClienteForm = new FormGroup({  
      Descricao: new FormControl(null), 
      Nome: new FormControl("",[Validators.required]),        
      Cpf: new FormControl("",[Validators.required]),  
      Email: new FormControl("",[Validators.required]),  
      DataNascimento:new FormControl("",[Validators.required])
    });  
  }

  cadastrarCliente() {  
    this.postado = true; 

    if (this.ClienteForm.invalid) {  
      return;  
    }  

    this.clienteService.cadastrarCliente(this.ClienteForm.value)
      .subscribe(clienteId => {
        if(clienteId > 0)
        {
          this.voltar();
        }
    }); 
  } 

  preencherCampos(data: any) {  
    this.ClienteForm.controls["Nome"].setValue(data.nome);  
    this.ClienteForm.controls["Cpf"].setValue(data.cpf);      
    this.ClienteForm.controls["Email"].setValue(data.email);  
    this.ClienteForm.controls["DataNascimento"].setValue(data.dataNascimento);  
    this.ClienteForm.controls["Descricao"].setValue(data.descricao);  

  } 

  voltar() {
    this.router.navigate(['/listagem-cliente/']);
  }

}
