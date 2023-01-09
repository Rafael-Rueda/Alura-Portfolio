import {clienteNovo, contaNova, conta} from "./funcoes.js"

// clienteNovo (Nome, CPF, RG)
// contaNova (Agencia, Saldo, CPF)
// conta (CPF)

clienteNovo('Joao', 11111111111, 100000000)
contaNova(1001, 1000, 11111111111)
clienteNovo('Maria', 22222222222, 200000000)
contaNova(1002, 1000, 22222222222)

conta(11111111111).transferir(100, 22222222222);