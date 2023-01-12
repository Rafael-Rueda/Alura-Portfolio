import { funcionarios } from "../funcoes.js";

export class Funcionario {
    logado = false;
    static login(cpf, senhafornecida) {
        const funcionario = funcionarios.find(e => {
            return e.cpf == cpf
        })
        if(senhafornecida == funcionario.senha) {
            funcionario.logado = true;
        }
    }
    constructor(nome, cpf, rg) {
        if (this.constructor == Funcionario) {
            throw new Error('Classe Funcionario é abstrata.')
        }
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
    };
}
