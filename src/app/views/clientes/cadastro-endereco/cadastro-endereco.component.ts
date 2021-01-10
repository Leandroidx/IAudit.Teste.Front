import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';  
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import ClienteEndereco from 'src/app/models/clienteEndereco.Models';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html'
})
export class CadastroEnderecoComponent {
  title = 'IAudit';

  constructor(private clienteService: ClienteService, 
    private route: ActivatedRoute,
    private router: Router) { }  

  clienteEndereco: ClienteEndereco;  
  CadastroEnderecoForm: FormGroup;  
  postado = false;   
  idCliente: number = 0;

  ngOnInit(): void {  

    this.idCliente = parseInt(this.route.snapshot.paramMap.get('id'));
    
    this.CadastroEnderecoForm = new FormGroup({  
      Endereco: new FormControl("",[Validators.required]),        
      Complemento: new FormControl(null),  
      IdCliente: new FormControl(null),  
      Cep: new FormControl("",[Validators.required]),  
      Cidade: new FormControl("",[Validators.required]),  
      Bairro: new FormControl("",[Validators.required]),  
      Estado: new FormControl("",[Validators.required]),  
      Pais: new FormControl("",[Validators.required])
    });
    this.preencherCampos();  
  }
  

  cadastrarClienteEndereco() {  
    this.postado = true; 

    if (this.CadastroEnderecoForm.invalid) {  
      return;  
    }  

    this.clienteService.cadastrarEndereco(this.CadastroEnderecoForm.value)
      .subscribe(idClienteEndereco => {
        if(idClienteEndereco > 0)
        {
          this.voltar();
        }

    }); 
  } 

  limparFormulario()  
  {     
    this.CadastroEnderecoForm.reset();  
    this.postado = false;   
  } 

  preencherCampos() {  
    this.CadastroEnderecoForm.controls["IdCliente"].setValue(this.idCliente);  
  } 

  voltar() {
    this.router.navigate([`/editar-cliente/${this.idCliente}`]);
  }
  
}
