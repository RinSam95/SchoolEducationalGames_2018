$(document).ready(function () {
    
    //Samu Rintala 2018




    //sallii vain yhden vastauksen per kysymys
    function estaVastaus(elementti) {
        var vanhempi = elementti.parent();

        vanhempi.children().each(function () {
            $(this).removeClass("klikkaa");
            $(this).off("click");
        });
    }
    
    //resetoi selaimen muistin
    $("#aloitaNappi").click(function(){
        sessionStorage.setItem("visaPisteet", 0);
    });

    //Ottaa oikdein vastausten määrän selaimen muistista
    var oikeatVastaukset = sessionStorage.getItem("visaPisteet");

    $(".vastaus").click(function () {
        estaVastaus($(this));
        var vastaus = $(this).attr("data-vastaus");

        if (vastaus === "1") {
            //oikein
            $(this).addClass("oikein");
            
            //kasvattaa oikeiden vastausten määrää yhdellä
            oikeatVastaukset++;
            
            //tallentaa oikeat vastaukset selaimen muistiin
            sessionStorage.setItem("visaPisteet", oikeatVastaukset);

        } else {
            //väärin
            $(this).addClass("vaarin");

        }
    });
    //Tulostaa oikeiden vastausten määrän "Lopputulos" sivulle
    $("#tulos").html("Oikein: " + oikeatVastaukset + "/12");


    
    //Huijauksen estoja:
    

    
//   $(window).bind('beforeunload',function(){
//       sessionStorage.setItem("visaPisteet", 0);
//
//    return 'are you sure you want to leave?';
//
//});


//$( window ).unload(function() {
//  sessionStorage.setItem("visaPisteet", 0);
//});

      
    //Poistaa selaimen peruutus napin käytöstä jotta käyttäjä ei voi toistaa
    //samaa sivua uudelleen kerätäkseen ylimääräisiä pisteitä
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };


});



