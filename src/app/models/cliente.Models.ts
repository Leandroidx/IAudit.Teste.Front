import ClienteEndereco from './clienteEndereco.Models';

export default class Cliente {
    IdCliente: number;
    Nome: string;
    Cpf: string;
    Email: string;
    DataNascimento: Date | null;
    Descricao: string;
    DataInclusao: Date | null;
    DataAlteracao: Date | null;
    ClienteEnderecos: ClienteEndereco[];

}
