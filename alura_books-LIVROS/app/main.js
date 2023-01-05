const sec_livros = document.getElementById('livros');
let livros = [];
const botoes = document.querySelectorAll('.btn');
let livrinhos = [];
let _state = true;
let disposicao = '';
const livros_total = document.querySelector('#valor');

window.addEventListener('load', PegaDados)

async function PegaDados() {
    const Dados = await (await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')).json();

    livros = Dados;

    appendLivro(livros);

    botoes.forEach(a => {
        a.addEventListener('click', filtrarLivro)
    })

    calcularPreco();
}
