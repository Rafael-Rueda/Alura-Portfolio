function scrolll() {
    window.requestAnimationFrame(calculoscroll)
}

function calculoscroll() {
    const posicao = document.getElementById('sec-dicas').getBoundingClientRect()['y']
    novaPos = Number(posicao)
    if (posicao > 350) {
        document.querySelector('.card-esq').style.transform = `translateX(${(-posicao + 350) * 2}px)`;
        document.querySelector('.card-dir').style.transform = `translateX(${(posicao - 350) * 2}px)`;
    } 
    
    if (posicao < 350) {
        document.querySelector('.card-esq').style.transform = `translateX(${0}px)`;
        document.querySelector('.card-dir').style.transform = `translateX(${0}px)`;
    }
}

gsap.to("#coqueiro", {scale: 0.85, repeat: -1, yoyo: true, duration: 0.5, rotate: 5})
gsap.to("#filtro", {scale: 0.85, repeat: -1, yoyo: true, duration: 0.5, rotate: 5})

window.addEventListener('scroll', scrolll)

