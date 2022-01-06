/* ============================================================================================================================= */
// Serve para chamar a função J querry do carrosel
$('.owl-carousel').owlCarousel({
    loop:true,                                      /*Cria um loop quando rotacionado o carrocel*/
    margin:10,                                      /*Cria uma margem entre os elementos do carrocel*/
    nav:true,                                       /*Cria botões navegadores no carrocel*/
    responsive:{                                    /*Quantidade de imagens no carrocel dependendo do tamanho da tela*/
        0:{                                         /*1 imagem no carrocel, se o tamanho da página esta próximo de 0px*/
            items:1
        },
        600:{                                       /*3 imagem no carrocel, se o tamanho da página esta com menos de 600px*/
            items:3
        },
        1000:{                                      /*5 imagem no carrocel, se o tamanho da página esta com menos de 1000px*/
            items:5
        }
    }
})