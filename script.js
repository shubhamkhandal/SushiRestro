$(document).ready(function(){
    //navbar toggler btn
    $('.navbar-toggler').on('click',function(){
        $('.navbar-toggler').toggleClass('change')
    })

    //ripples...................
    $("#header, .info").ripples({
        dropRadius: 25,
        perturbance: 0.8,
    }); 

    //manafic-popup.....................
    $('.parent-container').magnificPopup({
        delegate:'a',
        //child item selector by clicking on it popup will open.
        type:'image',

        gallery:{
            enabled:true
        }
    })
});