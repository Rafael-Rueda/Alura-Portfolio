const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()
recognition.addEventListener('result', onSpeak)
recognition.addEventListener('end', () => recognition.start())

function onSpeak(e) {
    var resultado = e.results[0][0].transcript
    console.log(resultado)
    resultado = parseInt(resultado)
    if (typeof resultado === 'number' && !isNaN(resultado)) {
        input = resultado;
        span_user.innerHTML = resultado;
        num_secf()
    } else {
        alert('O que você disse não é um número !')
    }
}