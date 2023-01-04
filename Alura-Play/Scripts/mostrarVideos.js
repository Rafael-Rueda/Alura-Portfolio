const lista = document.querySelector('.videos__container');

async function constroiCard() {
    try {
     const videos = await listavideos();
    videos.forEach(element => {
        // Variaveis

        const $url = element.url;
        const $titulo = element.titulo;
        const $imagem = element.imagem;
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
    lista.innerHTML += video;
    });   
    }
    catch {
        const div_erro = document.querySelector('.div__header-nav-main')
        div_erro.style.cssText = 'margin-top: 20%;'
        div_erro.innerHTML = '<p>Não foi possível carregar a lista de vídeos. O servidor JSON precisa estar hospedado, ou a URL está incorreta.</p>'
    }
    
}

constroiCard();