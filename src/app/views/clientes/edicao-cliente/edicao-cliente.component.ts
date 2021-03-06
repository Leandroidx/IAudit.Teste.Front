import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';  
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Cliente from 'src/app/models/cliente.Models';

@Component({
  selector: 'app-edicao-cliente',
  templateUrl: './edicao-cliente.component.html'
})
export class EdicaoClientesComponent {
  title = 'IAudit';

  constructor(private clienteService: ClienteService, 
    private route: ActivatedRoute,
    private router: Router) { }  
  cliente: Cliente;  
  clienteEnderecos: any;  
  ClienteForm: FormGroup;  
  postado = false;   
  idCliente: number = 0;

  ngOnInit(): void {  

    this.idCliente = parseInt(this.route.snapshot.paramMap.get('id'));
    this.obterCliente(this.idCliente);
    this.listarEnderecos(this.idCliente);

    this.ClienteForm = new FormGroup({  
      IdCliente: new FormControl(null),  
      Descricao: new FormControl(null), 
      Nome: new FormControl("",[Validators.required]),        
      Cpf: new FormControl("",[Validators.required]),  
      Email: new FormControl("",[Validators.required]),  
      DataNascimento:new FormControl("",[Validators.required])
    });  
  }
  
  obterCliente(idCliente: number) {  
    this.clienteService.obterCliente(idCliente)
      .subscribe(cliente => {
        this.cliente = cliente;
        this.preencherCampos(this.cliente);
    }); 
  } 

  atualizarCliente() {  
    this.postado = true; 

    if (this.ClienteForm.invalid) {  
      return;  
    }  

    this.clienteService.editarCliente(this.ClienteForm.value)
      .subscribe(cliente => {
        this.cliente = cliente;

        this.voltar();
    }); 
  } 

  limparFormulario()  
  {     
    this.obterCliente(this.idCliente);
    this.ClienteForm.reset();  
    this.postado = false;   
  } 

  preencherCampos(data: any) {  
    this.ClienteForm.controls["IdCliente"].setValue(data.idCliente);  
    this.ClienteForm.controls["Nome"].setValue(data.nome);  
    this.ClienteForm.controls["Cpf"].setValue(data.cpf);      
    this.ClienteForm.controls["Email"].setValue(data.email);  
    this.ClienteForm.controls["DataNascimento"].setValue(data.dataNascimento);  
    this.ClienteForm.controls["Descricao"].setValue(data.descricao);  

  } 

  editarEndereco(idClienteEndereco: any) {
    this.router.navigate([`/editar-endereco/${idClienteEndereco}`]);
  }

  cadastrarEndereco() {
    this.router.navigate([`/cadastrar-endereco/${this.idCliente}`]);
  }

  voltar() {
    this.router.navigate(['/listagem-cliente/']);
  }
  
  deletarEndereco(idClienteEndereco: any)
  {
    this.clienteService.deletarEndereco(idClienteEndereco)
      .subscribe(cliente => {
        this.cliente = cliente;
    })
    .add(() => {
      this.listarEnderecos(this.idCliente);
    });
  }

  listarEnderecos(idCliente: any) {  
    this.clienteService.listarEnderecos(idCliente)
      .subscribe(clienteEnderecos => {
        this.clienteEnderecos = clienteEnderecos;
    }); 
  } 

}
