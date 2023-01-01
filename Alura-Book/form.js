let _CEP = document.querySelector('#cep')

_CEP.addEventListener('blur', async function() {
    try {
    _CEP$value = _CEP.value.replaceAll('-','');
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${_CEP$value}/json/`);
    consultaCEP = await consultaCEP.json();
    preencherFormCEP(consultaCEP);
    }
    catch{
        console.log('ERRO: Digite o CEP corretamente.')
    }
})

function preencherFormCEP(d) {
        for (const campo in d) {
            if (document.querySelector('#'+campo)) {
                document.querySelector('#'+campo).value = d[campo];
            }
        }
}
