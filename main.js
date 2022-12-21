const botao1 = document.querySelectorAll('.controle')
let limitedevalor = 0
const estatistica = document.querySelectorAll('.estatistica')
let conjstat = []
const estatistica_numero = document.querySelectorAll('.estatistica-numero')
const estatistica_valor = document.querySelectorAll('.estatistica-valor')

function estatisticasf() {
    for (c = 0; c < estatistica.length ; c++) {
        conjstat.push(estatistica_numero[c].firstChild.nodeValue)
    }
    return conjstat;
}

function upgrade(upid) {
    let numid = upid;
    if (upid.toString().length > 1) {
        if (upid.toString().split('')[1] == 'x') {
            let upidsplit = numid.toString().split('x')
            numid = parseInt(upidsplit[1])
            upid = parseInt(upidsplit[0])
        } else if (upid.toString().split('')[1] == '/') {
            let upidsplit = numid.toString().split('/')
            numid = parseInt(upidsplit[1] * (-1)) 
            upid = parseInt(upidsplit[0])
        } 
        
        else {
            
            numid = 1;
        }
    }
    
    estatistica_numero[upid].innerHTML = (parseFloat(estatistica_numero[upid].firstChild.nodeValue) + (1 * Number(numid)))
    estatistica_valor[upid].setAttribute('data-points', (parseFloat(estatistica_valor[upid].getAttribute('data-points')) + (1 * Number(numid))))
    console.log(estatistica_numero[upid].getAttribute('data-points'))
    
}

function degrade(degid) {

    let numid = degid;
    if (degid.toString().length > 1) {
        if (degid.toString().split('')[1] == 'x') {
            let degidsplit = numid.toString().split('x')
            numid = parseInt(degidsplit[1])
            degid = parseInt(degidsplit[0])
        } else if (degid.toString().split('')[1] == '/') {
            let degidsplit = numid.toString().split('/')
            numid = parseInt(degidsplit[1] * (-1)) 
            degid = parseInt(degidsplit[0])
        } 
        
        else {
            numid = 1;
        }
    }

    estatistica_numero[degid].innerHTML = (parseFloat(estatistica_numero[degid].firstChild.nodeValue) - 1 * Number(numid))
    estatistica_valor[degid].setAttribute('data-points', (parseFloat(estatistica_valor[degid].getAttribute('data-points')) - (1 * Number(numid))))
    console.log(estatistica_numero[degid].getAttribute('data-points'))
}




for(c = 0 ; c < botao1.length ; c++) {

    botao1[c].querySelector('.subtrair').addEventListener('click', function() {
        const contador = this.parentNode.querySelector('.controle-contador')
        const valor_contador = contador.getAttribute('value')

        if (parseFloat(valor_contador) > 0 && (parseFloat(valor_contador) - 1).toString().length == 1) {
            contador.setAttribute('value', '0' + (parseFloat(valor_contador) - 1).toString())
            limitedevalor -= 1

            for (c = 1 ; c < this.parentNode.classList.length; c++ ) {
                degrade(this.parentNode.classList[c]);
            }

        } else if (parseFloat(valor_contador) > 0 && (parseFloat(valor_contador) - 1).toString().length != 1 ) {
            contador.setAttribute('value', (parseFloat(valor_contador) - 1).toString())
            limitedevalor -= 1

            for (c = 1 ; c < this.parentNode.classList.length; c++ ) {
                degrade(this.parentNode.classList[c]);
            }
        }
        
    })
    botao1[c].querySelector('.somar').addEventListener('click', function() {
        const contador = this.parentNode.querySelector('.controle-contador')
        const valor_contador = contador.getAttribute('value')

        if (limitedevalor < 10 && parseFloat(valor_contador) >= 0 && (parseFloat(valor_contador) + 1).toString().length == 1) {
            contador.setAttribute('value', '0' + (parseFloat(valor_contador) + 1).toString())
            limitedevalor += 1

            for (c = 1 ; c < this.parentNode.classList.length; c++ ) {
                upgrade(this.parentNode.classList[c]);
            }

        } else if(limitedevalor < 10 && (parseFloat(valor_contador) + 1).toString().length != 1) {
            contador.setAttribute('value', (parseFloat(valor_contador) + 1).toString())
            limitedevalor += 1

            for (c = 1 ; c < this.parentNode.classList.length; c++ ) {
                upgrade(this.parentNode.classList[c]);
            }

        }
    })

}
