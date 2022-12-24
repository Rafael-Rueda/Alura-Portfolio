let span_min = document.querySelector('#span_min')
let span_max = document.querySelector('#span_max')
let span_user = document.getElementById('span_user')
let span_res = document.querySelector('#span_res')
const num_sec = parseInt(Math.random() * 1000)
console.log(num_sec)
let input = span_user.firstChild.nodeValue

function num_secf() {
    console.log(num_sec)
    if (input == num_sec) {
        span_res.innerHTML = num_sec
        alert('Parabens, voce acertou !')
        window.location.reload()
    }
    else {
        if (num_sec > input) {
            span_res.innerHTML = `maior que ${input}`
        }
        else if(num_sec < input) {
            span_res.innerHTML = `menor que ${input}`
        }
    }
    
}
