const buscar = document.querySelector('[data-busca]');
const pesquisa = document.querySelector('[data-pesquisa]');

async function buscarVideo(e) {
    e.preventDefault();
    const busca = await buscaVideo(pesquisa.value)
    busca.forEach(element => {
        // Variaveis

        const $url = element.url;
        const $titulo = element.titulo;
        const $descricao = element.descricao;


        const video = 
    `<li class="videos__item">
        <iframe width="100%" height="72%" src="${$url}"
            title="${$titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="_img/videos/Ellipse 11.png" alt="Logo do canal Alura Cursos Online">
            <h3>${$titulo}</h3>
            <p>${$descricao}</p>
        </div>
    </li>`;
    lista.innerHTML = '';
    lista.innerHTML += video;
    });
}

buscar.addEventListener('click', e => { buscarVideo(e) })