let _CEP = document.querySelector('#cep')

_CEP.addEventListener('blur', e => {
    _CEP$value = _CEP.value.replaceAll('-','');
    const consultaCEP = fetch(`https://viacep.com.br/ws/${_CEP$value}/json/`)
    .then(valor => valor.json()
        .then(_data => preencherFormCEP(_data)))
    .catch()
})

function preencherFormCEP(d) {
    for (const campo in d) {
        if (document.querySelector('#'+campo)) {
            console.log(document.querySelector('#'+campo));
            document.querySelector('#'+campo).value = d[campo];
        }
    }
}