const formulario = document.querySelector('[data-formulario]');

async function criarVideo(e) {
    e.preventDefault();

    // Variaveis

    const $descricao = document.querySelector('[data-descricao]').value;
    const $url = document.querySelector('[data-url]').value;
    const $titulo = document.querySelector('[data-titulo]').value;

    await criaVideo($titulo, $descricao, $url);

    window.location.href = "index.html";
}

formulario.addEventListener('submit', evento => criarVideo(evento));