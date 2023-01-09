import { contas } from "./funcoes.js";

export class ContaCorrente{
    constructor (agencia, saldo, cliente) {
        this.agencia = agencia;
        this.saldo = saldo;
        this.cliente = cliente;
        this.sacar = function (valor) {
            if (this.saldo >= valor) {
                this.saldo -= valor;
            } else {
                console.log('A conta não possui saldo suficiente para essa transação.')
            }
        };
        this.depositar = function (valor) {
            if (valor > 0) {
                this.saldo += valor;
            } else {
                console.log('Digite um valor válido.')
            }
        };
        this.transferir = function (valor, cpf) {
            if (cpf != this.cliente.cpf) {
                if (this.saldo >= valor) {
                    this.saldo -= valor;
                    const conta_transf = contas.find(e => {
                        return e.cliente.cpf == cpf;
                    })
                    conta_transf.saldo += valor;
                    console.log(`Transferência de ${this.cliente.nome} para ${conta_transf.cliente.nome} no valor de R$${valor} concluída com sucesso.`)
                }
            } else {
                console.log('[ERRO] Você não pode transferir para si mesmo.')
            }
        }
    }
};
