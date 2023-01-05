function filtrarLivro() {
    switch (this.value) {
        case 'front-end':  {
            const livros_front = livros.filter(livro => {
                return livro.categoria == 'front-end'
            })
            RemoverLivro(sec_livros);
            appendLivro(livros_front);


            break;
        }
        case 'back-end':  {
            const livros_back = livros.filter(livro => {
                return livro.categoria == 'back-end'
            })
            RemoverLivro(sec_livros);
            appendLivro(livros_back);


            break;
        }
        case 'dados':  {
            const livros_dados = livros.filter(livro => {
                return livro.categoria == 'dados'
            })
            RemoverLivro(sec_livros);
            appendLivro(livros_dados);


            break;
        }
        case 'livros':  {
            RemoverLivro(sec_livros);
            const livrosDisponiveis = livros.filter(livro => {
                return livro.quantidade > 0
            })
            appendLivro(livrosDisponiveis);


            break;
        }
        case 'preco':  {
            let ordenados = ''
            if (_state === true) {
                ordenados = livros.sort((a, b) => a.preco - b.preco)
                _state = false;
            }
            else if(_state === false) {
                ordenados = livros.sort((a, b) => b.preco - a.preco)
                _state = true;
            }

            // RemoverLivro(livros)
            RemoverLivro(sec_livros);
            // Adicionar novos livros (ordenados)
            appendLivro(ordenados);

            
            break;
        }
    }

}