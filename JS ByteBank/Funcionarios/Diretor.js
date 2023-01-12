import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{
    constructor(nome, cpf, rg) {
        super(nome, cpf, rg);
        this.salario = 5600;
        this.aprovar = function() {
            if (this.logado == true) {
                console.log('aprovado')
            }
        };
    }
};
