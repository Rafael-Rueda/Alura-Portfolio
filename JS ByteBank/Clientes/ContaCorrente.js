import { Conta } from "../Conta.js";

export class ContaCorrente extends Conta {
    constructor(agencia, saldo, cliente) {
        super(agencia, saldo, cliente);
        this.sacar = function(valor) {
            if (this.saldo >= (1.1 * valor)) {
                this.saldo -= (1.1 * valor);
                console.log(`Saque no valor de R$${valor} efetuado com sucesso (+10% de taxa).`)
            } else {
                console.log('A conta não possui saldo suficiente para essa transação.')
            }
        }
    }
};