import { Conta } from "../Conta.js";

export class ContaPoupanca extends Conta {
    constructor(agencia, saldo, cliente) {
        super(agencia, saldo, cliente);
    }
};