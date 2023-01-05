function verificarDisposicao(obj) {
    const livrosIndisponiveis = livros.filter((livro) => {
        return livro.quantidade <= 0;
    })
    return livrosIndisponiveis;
}