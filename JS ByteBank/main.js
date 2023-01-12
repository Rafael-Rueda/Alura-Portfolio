import {clienteNovo, contaCorrenteNova, contaCorrente, contaPoupancaNova, contaPoupanca, funcionarioNovoDiretor, funcionarioNovoGerente, senhaNova, funcionario, login} from "./funcoes.js"

// clienteNovo (Nome, CPF, RG)

// contaCorrenteNova (Agencia, Saldo, CPF)
// contaPoupancaNova (Agencia, Saldo, CPF) => Necessario ter uma conta corrente 

// contaCorrente (CPF)
// contaPoupanca (CPF)



// funcionarioNovoDiretor (Nome, CPF, RG)
// funcionarioNovoGerente (Nome, CPF, RG)

// senhaNova (CPF, senha)
// login (CPF, senha) => Necessario ter uma senha criada

// funcionario (CPF)

clienteNovo('Joao', 11111111111, 100000000) // Cliente Joao criado
contaCorrenteNova(1001, 1000, 11111111111) // Conta do Joao criada
clienteNovo('Maria', 22222222222, 200000000) // Cliente Maria criado
contaCorrenteNova(1002, 1000, 22222222222) // Conta da Maria criada

contaCorrente(11111111111).transferir(100, 22222222222); // Transferencia Joao para Maria

contaPoupancaNova(1002, 500, 22222222222); // Maria cria uma nova conta poupanca e coloca R$ 500 nela

contaPoupanca(22222222222).sacar(100) // Maria saca R$ 100 da conta poupanca
contaCorrente(22222222222).sacar(50) // Maria saca R$ 50 da conta corrente (com +10% de taxa)


console.log(contaCorrente(22222222222))
console.log(contaPoupanca(22222222222))



funcionarioNovoDiretor('Rodolfo', 12312312312, 300000000) // Contratou-se um novo diretor
funcionarioNovoGerente('Adalberto', 32132132132, 400000000) // Contratou-se um novo gerente

senhaNova(12312312312, 'senha123') // Rodolfo cria uma senha para sua conta

login(12312312312, 'senha123'); // Rodolfo loga em sua conta

console.log(funcionario(12312312312))

funcionario(12312312312).aprovar(); // Rodolfo aprova alguma coisa