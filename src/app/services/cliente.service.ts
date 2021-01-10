import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';  
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import Cliente from '../models/cliente.Models';
import ClienteEndereco from '../models/clienteEndereco.Models';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) {}     
      
  listarClientes() : Observable<any>{  
      return this.http.get<any>(`${environment.apiUrl}/clientes`);
  }  
      
  obterCliente(idCliente: number): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}/clientes/${idCliente}`);
  }

  cadastrarCliente(cliente: Cliente): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}/clientes/`, cliente);
  }

  editarCliente(cliente: Cliente): Observable<any> {
      return this.http.put(`${environment.apiUrl}/clientes/${cliente.IdCliente}`, cliente);
  }

  deletarCliente(idCliente: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/clientes/${idCliente}`);
  }

  cadastrarEndereco(clienteEndereco: ClienteEndereco): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/clientes/endereco`, clienteEndereco);
  }

  deletarEndereco(idClienteEndereco: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/clientes/endereco/${idClienteEndereco}`);
  }

  editarEndereco(clienteEndereco: ClienteEndereco): Observable<any> {
    return this.http.put(`${environment.apiUrl}/clientes/endereco/${clienteEndereco.IdClienteEndereco}`, clienteEndereco);
  }

  listarEnderecos(idCliente: number) : Observable<any>{  
    return this.http.get<any>(`${environment.apiUrl}/clientes/${idCliente}/enderecos`);
  } 

  obterEndereco(idClienteEndereco: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/clientes/endereco/${idClienteEndereco}`);
}


} 
