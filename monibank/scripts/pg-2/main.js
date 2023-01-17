const botaocamera = document.querySelector('[data-video-botao]');
const $camera = document.querySelector('[data-camera]');
const $video = document.querySelector('[data-video]');
const tirarfoto = document.querySelector('[data-tirar-foto]');
const $foto = document.querySelector('[data-video-canvas]');
const $mensagem = document.querySelector('[data-mensagem]');
let imagemURL = '';
const botaoenviar = document.querySelector('[data-enviar]');


botaocamera.addEventListener('click', async function() {
    const iniciarvideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
    botaocamera.style.display = 'none'
    $camera.style.display = 'block'
    $video.srcObject = iniciarvideo;
})

tirarfoto.addEventListener('click', function() {
    $foto.getContext('2d').drawImage($video, 0, 0, $foto.width, $foto.height)

    imagemURL = $foto.toDataURL("image/jpeg")

    $camera.style.display = 'none'
    $mensagem.style.display = 'block'
})

botaoenviar.addEventListener('click', () => {
    const receberdados = localStorage.getItem('cadastro')
    const converteretorno = JSON.parse(receberdados)
    converteretorno.imagem = imagemURL
    localStorage.setItem('cadastro',JSON.stringify(converteretorno))
    window.location.href = "./abrir-conta-form-3.html"
})