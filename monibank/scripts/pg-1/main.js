import { cpfVerifica } from "./cpf.js";
import { dataVerifica } from "./data.js";
import { nomeVerifica } from "./nome.js";
import { rgVerifica } from "./rg.js";
import { emailVerifica } from "./email.js";
import { termosVerifica } from "./termos.js";

const $inputs = document.querySelectorAll('[required]');
const $input_submit = document.querySelector('#enviar')
const $formulario = document.querySelector('[data-formulario]')

$formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const localData = {}
    for (let i = 0; i < $formulario.elements.length; i++) {
        const input = $formulario.elements[i]
        if (input.tagName === "INPUT" && !(input.type == 'submit')) {
            localData[input.name] = input.value;
        }
    }
    localStorage.setItem('cadastro', JSON.stringify(localData));
    window.location.href = "./abrir-conta-form-2.html"
})

$input_submit.addEventListener('click', () => {
    $inputs.forEach(input => {
        verificaCampo(input)
    })
})

$inputs.forEach(input => {
    input.addEventListener('blur', () => verificaCampo(input));
    input.addEventListener('invalid', (e) => {e.preventDefault()})
});

function verificaCampo(input) {
    function Validar(el, erro, func) {
            if (func(el)) {
                el.setCustomValidity('')
                el.parentNode.getElementsByTagName('span')[0].innerHTML = '';
            } else {
                el.setCustomValidity('Digite um valor válido !')
                el.parentNode.getElementsByTagName('span')[0].innerHTML = erro;
            }
    }

    const erros = [
        {
            input: 'cpf' ,
            mensagem: ['Digte um CPF válido !', 'Preencha o campo'],
            func: cpfVerifica

        },
        {
            input: 'aniversario',
            mensagem: ['Digite uma data válida !', 'Preencha o campo'],
            func: dataVerifica
        },
        {
            input: 'nome',
            mensagem: ['Digite um nome válido !', 'Preencha o campo', 'Nome muito curto (mínimo 3 caracteres)'],
            func: nomeVerifica
        },
        {
            input: 'email',
            mensagem: ['Digite um email válido !', 'Preencha o campo'],
            func: emailVerifica
        },
        {
            input: 'rg',
            mensagem: ['Digite um RG válido !', 'Preencha o campo'],
            func: rgVerifica
        },
        {
            input: 'termos',
            mensagem: ['Marque essa opção para prosseguir'],
            func: termosVerifica
        }
        
    ]

    erros.forEach(e => {
        if (input.id == e.input) {

            let msg = e.mensagem[0]
            if (input.value.length < 3 && input.id == 'nome') {
                msg = e.mensagem[2]
            }
            if (input.value == "") {
                msg = e.mensagem[1]
            }

            Validar(input, msg, e.func)
        }
    })
}
