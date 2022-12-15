var menu_input = document.getElementById('menu-input');                     // header-div-span-input
var menu_img = document.querySelector('img.header-div-span_1-label-img_1'); // header-div-span-label-img
var menu_nav = document.querySelector('nav.header-nav')                     // header-nav

// Quando checkado, uma função faz alterações visuais no "header-div-span-label"
    menu_input.addEventListener('change', function() { 
        if (menu_input.checked) {
            menu_img.setAttribute("src", "_assets/_img/Menu Aberto.png");
            menu_nav.style.display = "block"
        }
        else {
            menu_img.setAttribute("src", "_assets/_img/Menu.svg");
            menu_nav.style.display = "none"
        }
    })

    var main_botao1 = document.querySelector('.main-button_1')              // main-section_1-div-div-button_1
    var main_botao2 = document.querySelector('.main-button_2')              // main-section_1-div-div-button_2
    var main_divscroll = document.querySelector('.main-section_1-div-div')  // main-section_1-div-div
    var pos_bscroll = main_divscroll                                        // main-section_1-div-div
    var cont = 0                                                            // contador
    var main_sec1_li = document.querySelectorAll('.main-section_1-ul-li')   // main-section_1-ul-li
    var main_sec3_li = document.querySelectorAll('.main-section_3-ul-li');  // main-section_3-ul-li
    var main_divscroll2 = document.querySelector('.main-section_3-div-div')

// Função para retroceder a scrollbar "main-section_1-div-div"
    main_botao1.addEventListener('touchstart', function() {
        pos_bscroll = $(main_divscroll).scrollLeft();
        $(main_divscroll).scrollLeft(pos_bscroll - 185)
        if (cont > 0) {
            main_sec1_li[cont].style.color = "#C4C4C4"
            main_sec1_li[cont - 1].style.color = "var(--darkblue)"
            cont--
        }
    })
// Função para avançar a scrollbar da "main-section_1-div-div"
    main_botao2.addEventListener('touchstart', function(){
        pos_bscroll = $(main_divscroll).scrollLeft();
        $(main_divscroll).scrollLeft(pos_bscroll + 185)

        if (cont < 3) {
            main_sec1_li[cont].style.color = "#C4C4C4"
            main_sec1_li[cont + 1].style.color = "var(--darkblue)"
            cont++
        }
    })

// Fazendo um click ser considerado um touch nos "main-section_1-div-div-button"
    main_botao1.addEventListener('click', function() {
        main_botao1.dispatchEvent(new Event('touchstart'));
    })
    main_botao2.addEventListener('click', function() {
        main_botao2.dispatchEvent(new Event('touchstart'));
    })

// Fazendo os li da "main-section_1-ul-li" e "main-section_3-ul-li" funcionarem para mudar o scroll
    for (c = 0;c < 4;c++) {
        main_sec3_li[c].addEventListener('click', function() {
            //Estilos
            for(c = 0; c < 4; c++) {
                main_sec3_li[c].style.color = "#C4C4C4"
            }
            this.style.color = "var(--darkblue)"
            
            //Funcionamento
            if (this === main_sec3_li[0]) {
                $(main_divscroll2).scrollLeft(0)
            } else if (this === main_sec3_li[1]) {
                $(main_divscroll2).scrollLeft(185)
            } else if (this === main_sec3_li[2]) {
                $(main_divscroll2).scrollLeft(370)
            } else if (this === main_sec3_li[3]) {
                $(main_divscroll2).scrollLeft(555)
            }
        })
        main_sec1_li[c].addEventListener('click', function(){
            //Estilos
            for(c = 0; c < 4; c++) {
                main_sec1_li[c].style.color = "#C4C4C4"
            }
            this.style.color = "var(--darkblue)"

            //Funcionamento
            if (this === main_sec1_li[0]) {
                $(main_divscroll).scrollLeft(0)
                cont = 0
            } else if (this === main_sec1_li[1]) {
                $(main_divscroll).scrollLeft(185)
                cont = 1
            } else if (this === main_sec1_li[2]) {
                $(main_divscroll).scrollLeft(370)
                cont = 2
            } else if (this === main_sec1_li[3]) {
                $(main_divscroll).scrollLeft(555)
                cont = 3
            }
        })
    }



    main_sec1_li[0].style.color = "var(--darkblue)"
    main_sec3_li[0].style.color = "var(--darkblue)"

    var menu_input2_lista = document.querySelector('.li-lista')
    var categorias = document.querySelector('.li-categorias')
    var menu_input2 = document.getElementById('menu-input2')

    menu_input2.addEventListener('change', function() {
        if (menu_input2.checked) {
            menu_input2_lista.style.display = 'block';
        } else {
            menu_input2_lista.style.display = 'none';
        }
    })