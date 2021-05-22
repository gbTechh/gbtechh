$(document).ready(function(){
    acordeon();
    staticsBarra();
    btnverMas();
    toggleVermas();
    fillStart();
})



function acordeon(){
    $('.js-temario-list').on('click','.js-head-list',function(){
        var t=$(this);
        var tp = t.next();
        var ancle = t.children().children();         
        ancle.toggleClass('has-rotate');
        tp.slideToggle();    
    });   
    $('.js-temario-list').on('mouseenter mouseleave','.js-head-list',function(){
        var t=$(this);
        var ancle = t.children();
        ancle.toggleClass('has-bg');
    });  
}
function staticsBarra(){
    let array = $('.js-color-barra');
    array.each(function(persona, index){       
        let porcentaje = $(index).attr('data-width');
        $(index).css({'width':porcentaje + '%'});
        porcentaje= Math.floor(porcentaje);
        console.log(porcentaje);       
    })
}

function btnverMas(){   
    $('.js-body-comments').each(function()
    {
        let length = $(this).text().trim().length;
        if(length <= 285){
            $(this).children().removeClass('has-opacity');
            $(this).siblings().addClass('is-off');
            $(this).parent().siblings().removeClass('has-border-top');
        }
    });
}
function toggleVermas(){
    $('.js-btn-vermas').on('click',function(){
        let attr = $(this).attr('data-active');
        $(this).prev().children().toggleClass('is-off');
        $(this).prev().toggleClass('max-height');
        $(this).text('Ver menos');
         if(attr == 'on'){            
            $(this).attr('data-active','off');
         }
         if(attr == 'off'){
            $(this).text('Ver más');
            $(this).attr('data-active','on');
         }
    })
}

function fillStart(){
    let starFull = 'icon-full-star.png';
    let starMid = 'icon-mid-star.svg';
    let starGrey = 'icon-star-grey.svg';
    let divstar = $('.js-star-comments');
    divstar.each(function(){
        let value = $(this).attr('data-value');
        let decimal = value - Math.floor(value);
        let entero = value - decimal;  
        let starnull = 5 - value;
        let enteroStarNull = Math.floor(starnull);
        if(value >= 4.8){
            decimal = 1;
            entero = 5;
        }
        for (let index = 0; index < entero; index++) {       
            $(this).append(`<img src="./assets/img/icos/${starFull}" alt="" class="c-section-comments-star-barra">`);
        } 
        if(decimal == 0.5){
            $(this).append(`<img src="./assets/img/icos/${starMid}" alt="" class="c-section-comments-star-barra">`);
        }
        for (let index = 0; index < enteroStarNull; index++) {
            $(this).append(`<img src="./assets/img/icos/${starGrey}" alt="" class="c-section-comments-star-barra">`);            
        }
    })
}


// if(decimal < 0.5){
//     decimal = 0;
//     entero = entero + 1;
// }else if(decimal >= 0.5){
//     decimal = 0.5;
// }else{
//     decimal = 1;
// }