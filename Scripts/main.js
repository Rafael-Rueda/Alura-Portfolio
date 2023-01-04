async function listavideos() {
    const conexao = await (await fetch("http://localhost:3000/videos")).json()
    return conexao
};

async function criaVideo(_titulo, _descricao, _url) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: _titulo,
            descricao: `${_descricao} mil visualizações`,
            url: _url,
        })
    })

    const conexaoconvertida = await conexao.json();
    return conexaoconvertida;
};

async function buscaVideo(busca) {
    const conexao = await (await fetch(`http://localhost:3000/videos?q=${busca}`)).json()
    return conexao
}
