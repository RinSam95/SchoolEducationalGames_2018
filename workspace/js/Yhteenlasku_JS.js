$(document).ready(function () {

    //Samu Rintala 2018


    //Arpoo numeron "jolla lisäät" kohtaan vähentämättä
    // uniikkien numeroiden poolia
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    //Arpoo uniikin numeron
    var uniikkiNumero = [];
    var RandomNum = 10;
    function LuoUniikkiNumero() {
        if (!uniikkiNumero.length) {
            for (var i = 1; i < RandomNum; i++) {
                uniikkiNumero.push(i);
            }
        }
        var index = Math.floor(Math.random() * uniikkiNumero.length);
        var val = uniikkiNumero[index];

        uniikkiNumero.splice(index, 1);

        return val;

    }


    //arpoo luvun "luku jolla lisäät" kohtaan
    var luku1 = getRndInteger(1,9);
    $("#plus").html(luku1);




    //Arpoo uniikit luvut kaikkiin "luku johon lisäät" kohtiin  
    var luku2 = LuoUniikkiNumero();
    $("#luvut1").html("Luku johon lisäät: " + luku2);

    var luku3 = LuoUniikkiNumero();
    $("#luvut2").html("Luku johon lisäät: " + luku3);

    var luku4 = LuoUniikkiNumero();
    $("#luvut3").html("Luku johon lisäät: " + luku4);

    var luku5 = LuoUniikkiNumero();
    $("#luvut4").html("Luku johon lisäät: " + luku5);


    //pitää lukua pisteistä
    var pisteet = 0;

    //Lisää funktio
    function increment() {
        pisteet += 1000;
        $("#pistelaskuri").html(pisteet);
    }

    //Vähennä funktio
    function decrement() {
        pisteet -= 500;
        $("#pistelaskuri").html(pisteet);
    }


    //Tarkistaa ja näyttää oikeat vastaukset sekä jakaa pisteet
    $("#tarkistus").click(function () {
        $(".answer").each(function () {
            var vastaukset = $(this).attr("id");
            var oikeaVastaus = 0;

            if (vastaukset === "vastaus1") {
                oikeaVastaus = luku1 + luku2;

            } else if (vastaukset === "vastaus2") {
                oikeaVastaus = luku1 + luku3;

            } else if (vastaukset === "vastaus3") {
                oikeaVastaus = luku1 + luku4;
            } else {
                oikeaVastaus = luku1 + luku5;
            }

            //muuttaa tekstikentän sisällön numeroksi
            var vastaus1 = $(this).val();
            vastaus1 = parseInt(vastaus1);

            if (vastaus1 === oikeaVastaus) {

                //muuttaa taustan vihreäksi
                $(this).addClass("oikein");

                //lisää 1000 pistettä
                increment();

            } else {
                //muuttaa taustan punaiseksi
                $(this).addClass("vaarin");

                //vähentää 500 pistettä
                decrement();
            }
        });
        //Estää huijauksen poistamalla tarkistus napin käytöstä
        $("#tarkistus").attr("disabled", true);
    });



    //Arpoo uudet luvut ja tyhjentää kentät
    $("#seuraava").click(function () {

        //Uusi "jolla lisäät" luku
        luku1 = getRndInteger(1, 9);
        $("#plus").html(luku1);

        //Uudet "johon lisäät" luvut
        luku2 = LuoUniikkiNumero();
        $("#luvut1").html("Luku johon lisäät: " + luku2);

        luku3 = LuoUniikkiNumero();
        $("#luvut2").html("Luku johon lisäät: " + luku3);

        luku4 = LuoUniikkiNumero();
        $("#luvut3").html("Luku johon lisäät: " + luku4);

        luku5 = LuoUniikkiNumero();
        $("#luvut4").html("Luku johon lisäät: " + luku5);

        //tekstikentät tyhjiksi
        $("#vastaus1").val("");
        $("#vastaus2").val("");
        $("#vastaus3").val("");
        $("#vastaus4").val("");

        //poistaa "oikein" classin
        $("#vastaus1").removeClass("oikein");
        $("#vastaus2").removeClass("oikein");
        $("#vastaus3").removeClass("oikein");
        $("#vastaus4").removeClass("oikein");

        //poistaa "vaarin" classin
        $("#vastaus1").removeClass("vaarin");
        $("#vastaus2").removeClass("vaarin");
        $("#vastaus3").removeClass("vaarin");
        $("#vastaus4").removeClass("vaarin");

        //palauttaa tarkistusnapin käyttöön
        $("#tarkistus").attr("disabled", false);

        //YHTEENLASKUPELIN KOODI PÄÄTTYY

    });


});

