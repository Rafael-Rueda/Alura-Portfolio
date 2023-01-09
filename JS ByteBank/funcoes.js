import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta.js"

// Cria um cliente novo
export let clientes = [];
export function clienteNovo(nome, cpf, rg) {
    const cliente = new Cliente(nome, cpf, rg);
    clientes.push(cliente)
};

// Cria uma conta nova
export let contas = [];
export function contaNova(agencia, saldo, cpf) {
    const cliente = clientes.find(e => {
        return e.cpf == cpf
    })
    if (!cliente) {
       console.log('Não foi possível criar a conta porque o cliente com esse CPF não está cadastrado.')
       return;
    }
    const conta = new ContaCorrente(agencia, saldo, cliente);
    contas.push(conta);
}

//Encontrar conta
export function conta(cpf) {
    return contas.find(e => {
        return e.cliente.cpf == cpf
    })
}