import {Cliente} from "./Clientes/Cliente.js"
import {ContaCorrente} from "./Clientes/ContaCorrente.js"
import {ContaPoupanca} from "./Clientes/ContaPoupanca.js"

import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Funcionario } from "./Funcionarios/Funcionario.js";

// Cria um cliente novo
export let clientes = [];
export function clienteNovo(nome, cpf, rg) {
    const cliente = new Cliente(nome, cpf, rg);
    clientes.push(cliente)
};

// Cria uma conta nova

    // Conta Corrente
    export let contas = [];
    export function contaCorrenteNova(agencia, saldo, cpf) {
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

    // Conta Poupanca
    export let contaspoupanca = [];
    export function contaPoupancaNova(agencia, saldo, cpf) {
        const cliente = clientes.find(e => {
            return e.cpf == cpf
        })
        if (!cliente) {
        console.log('Não foi possível criar a conta poupança porque o cliente com esse CPF não está cadastrado.')
        return;
        }
    
        const conta = contas.find(e => {
            return e.cliente.cpf == cpf
        })

        if (conta.saldo < saldo) { // Nao Tiver dinheiro na conta corrente
            console.log('Não foi possível criar a conta poupança porque o cliente não tem saldo suficiente para compor o depósito solicitado.')
        } else {
            conta.saldo -= saldo;

            const contaPoupanca = new ContaPoupanca(agencia, saldo, cliente);
            contaspoupanca.push(contaPoupanca)
        }
        
    }

//Encontrar conta
export function contaCorrente(cpf) {
    return contas.find(e => {
        return e.cliente.cpf == cpf
    })
}

export function contaPoupanca(cpf) {
    return contaspoupanca.find(e => {
        return e.cliente.cpf == cpf;
    })
}



//Cria um novo funcionario
export let funcionarios = [];
    //Diretor
    export function funcionarioNovoDiretor(nome, cpf, rg) {
        const contafuncionario = new Diretor(nome, cpf, rg)
        funcionarios.push(contafuncionario);
    }
    //Gerente
    export function funcionarioNovoGerente(nome, cpf, rg) {
        const contafuncionario = new Gerente(nome, cpf, rg)
        funcionarios.push(contafuncionario);
    }

//Cria uma senha para um funcionario

export function senhaNova(cpf, senha) {
    const funcionario = funcionarios.find(e => {
        return e.cpf == cpf;
    });
    funcionario.senha = senha;
}

//Login
export function login(cpf, senha) {
    Funcionario.login(cpf, senha);
}

//Encontrar funcionario
export function funcionario(cpf) {
    return funcionarios.find(e => {
       return e.cpf == cpf
    })
}