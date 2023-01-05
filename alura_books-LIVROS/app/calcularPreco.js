function calcularPreco() {
    let livrosDisponiveis = livros.filter(livro => {
        return livro.quantidade > 0
    })
    livrosDisponiveis = livrosDisponiveis.reduce((acc, atual) => acc + atual.preco, 0)
    
    livros_total.innerHTML = Math.floor(Number(0.9 * (livrosDisponiveis + '0'))).toFixed(2)
}