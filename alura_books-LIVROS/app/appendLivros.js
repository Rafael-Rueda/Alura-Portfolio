function appendLivro(obj) {
    obj.forEach(livro => {
        
        verificarDisposicao().forEach(livroind => {
            if (livroind == livro) {
                disposicao = 'indisponivel'
            }
        })

        let Livrosprontos = `
        <div class="livro">
              <img class="livro__imagens ${disposicao}" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
              <h2 class="livro__titulo">
              ${livro.titulo}
              </h2>
              <p class="livro__descricao">${livro.autor}</p>
              <p class="livro__preco" id="preco">R$${livro.preco}0</p>
              <div class="tags">
                <span class="tag">${livro.categoria.toUpperCase()}</span>
              </div>
        </div>`
        sec_livros.innerHTML += Livrosprontos
        disposicao = ''
    });
}

function RemoverLivro(obj) {
    while (obj.firstChild) {
        obj.removeChild(obj.firstChild)
    }
}