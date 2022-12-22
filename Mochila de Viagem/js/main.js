const formulario = document.getElementById('form-items');
const lista = document.getElementById('lista')
const cadastrar = document.querySelectorAll('.cadastrar')
let elemento = document.querySelectorAll('.cadastrar')[0]
let itens = JSON.parse(localStorage.getItem('item')) || [];

itens.forEach((elmnt) => {
    Criarelemento(elmnt.nome, elmnt.quantidade);
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value

    if (elemento.value == 'Adicionar' && nome != '' && quantidade != '') {
        
        const itemAtual = {
            "nome": nome,
            "quantidade": quantidade
        }
        
        let igual = []

        if (itens.length != 0) {

        itens.forEach(function(element) {
            if (element.nome == nome) {
                element.quantidade = parseInt(element.quantidade) + parseInt(quantidade)
                localStorage.setItem("item", JSON.stringify(itens))
                Alterarelemento(nome, parseInt(element.quantidade));
                igual = [];
            } else {
                igual.push(false);
            }
        })

        } 
        else {
            itens.push(itemAtual)
            Criarelemento(nome, quantidade);
            localStorage.setItem("item", JSON.stringify(itens))
        }

        if (igual.length == itens.length) {
            itens.push(itemAtual)
            Criarelemento(nome, quantidade);
            localStorage.setItem("item", JSON.stringify(itens))
        } 

    } 
    
    if (elemento.value == 'Remover' && nome != '' && quantidade != '' && itens.length != 0) {

        let index_item = itens.findIndex(obj => obj.nome === nome)

        itens[index_item].quantidade = parseInt(itens[index_item].quantidade) - quantidade
        localStorage.setItem("item", JSON.stringify(itens))
        Alterarelemento(nome, parseInt(itens[index_item].quantidade))
        if (itens[index_item].quantidade <= 0) {
        itens.splice(index_item, 1);
        localStorage.setItem("item", JSON.stringify(itens))
        Alterarelemento(nome, parseInt(itens[index_item].quantidade))
        }

    }
})

for (c = 0; c < cadastrar.length ; c++) {
    cadastrar[c].addEventListener('click', function() {
        elemento = this; 
    })
}

function Criarelemento(nome, quantidade) {
    const el_stg = document.createElement('strong')
    el_stg.innerHTML = quantidade
    const el = document.createElement('li')
    el.classList.add('item')
    el.appendChild(el_stg);
    el.innerHTML += nome
    lista.appendChild(el)

}

function Alterarelemento(nome, quantidade) {
    for (c = 0 ; c < lista.childNodes.length ; c++) {
        if (lista.childNodes[c].nodeType === 1 && lista.childNodes[c].childNodes[1].textContent == nome) {
            if (quantidade > 0) {
            lista.childNodes[c].childNodes[0].innerHTML = quantidade
            } else {
                lista.removeChild(lista.childNodes[c])
            }
        }
}}

/*
Constants:

formulario (HTMLFormElement object)
lista (HTMLElement object)
cadastrar (NodeList object)
elemento (HTMLButtonElement object)

Variables:

itens (Array object)

Functions:

Criarelemento
Alterarelemento

Methods:

getElementById (Document object)
querySelectorAll (Document object)
addEventListener (EventTarget object)
preventDefault (Event object)
JSON.parse (JSON object)
localStorage.getItem (Storage object)
console.log (Console object)
forEach (Array object)
elements (HTMLFormElement object)
findIndex (Array object)
splice (Array object)
innerHTML (Element object)
classList.add (DOMTokenList object)
appendChild (Node object)
nodeType (Node object)
textContent (Node object)

Properties:

formulario.id (string)
formulario.elements (HTMLFormControlsCollection object)
formulario.target (EventTarget object)
formulario.value (string)
lista.childNodes (NodeList object)
cadastrar.length (number)
elemento.value (string)
itens.length (number)
itens.nome (string)
itens.quantidade (string or number)
localStorage.item (string)
elmnt.nome (string)
elmnt.quantidade (string or number)
evento.target (EventTarget object)
evento.elements (HTMLFormControlsCollection object)
nome.value (string)
quantidade.value (string)
obj.nome (string)
el.classList (DOMTokenList object)
el.innerHTML (string)
el.appendChild (Node object)
el_stg.innerHTML (string)
*/

