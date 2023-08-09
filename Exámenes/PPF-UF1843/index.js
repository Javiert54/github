var textoant = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, quaerat.";
;

$(function () {
    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $("#opener").on("click", function () {
        $("#dialog").dialog("open");
    });



    $("#dos").on("click", function () {
        $("body").css("color", "green");
    });

    $("#tres").on("click", function () {
        $("body").css("background-color", "orange");
    });








    $("#cuatro").on("click", function () {
        $(".contenedor").each(function(){
            $(this).removeClass("ui-state-disabled");
        });
        $("#sortable").sortable();
        $("#sortable").disableSelection();


    });







    $("#cinco").on("click", function () {



        $(".parrafocont").each(function () {
            $(this).text(textoant);
        });



    });



    $("#seis").on("click", function () {

        $(".parrafocont").each(function () {
            $(this).css("font-family", "Arial");
        });

    });









    $("#siete").on("click", function () {

        textoant = document.querySelector("#parrafo").textContent;

        var input = $("#input").val();

        $(".parrafocont").each(function () {
            $(this).text(input);
        });

    });

    var fontsize = 12;
    $("#ocho").on("click", function () {
        fontsize++;
        $(".parrafocont").each(function () {
            $(this).css("font-size", `${fontsize}px`);
        });
    })


    $("#nueve").on("click", function () {
        fontsize--;
        $(".parrafocont").each(function () {
            $(this).css("font-size", `${fontsize}px`);
        });
    })



    $("#diez").on("click", function () {


        $(".contenedor").each(function () {
            $(this).addClass("ui-state-disabled");
        });

        $("#sortable").sortable(); {
            items: "li:not(.ui-state-disabled)"
        }
    })




    function hexFromRGB(r, g, b) {
        var hex = [
            r.toString(16),
            g.toString(16),
            b.toString(16)
        ];
        $.each(hex, function (nr, val) {
            if (val.length === 1) {
                hex[nr] = "0" + val;
            }
        });
        return hex.join("").toUpperCase();
    }
    function refreshSwatch() {
        var red = $("#red").slider("value"),
            green = $("#green").slider("value"),
            blue = $("#blue").slider("value"),
            hex = hexFromRGB(red, green, blue);
        
        $("#once").on("click", function(){
            $("#swatch").css("background-color", "#" + hex);
        });

    }

    $("#red, #green, #blue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch
    });
    $("#red").slider("value", 255);
    $("#green").slider("value", 140);
    $("#blue").slider("value", 60);



    $("#doce").on("click", function(){

        $(".contenedor").resizable({
            animate: true
          });
    })


});
