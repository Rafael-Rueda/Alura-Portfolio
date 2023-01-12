import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
    constructor(nome, cpf, rg) {
        super(nome, cpf, rg);
        this.salario = 4000;
        this.aprovar = function() {
            if (this.logado == true) {
                console.log('aprovado')
            }
        };
    }
};
