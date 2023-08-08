var links = JSON.parse(localStorage.getItem("links")) || [];

$(function(){
    rojo = $("#rojo");
    rojo    
        .css("background-color", "red")


    amarillo = $("#amarillo");
    amarillo
        .css("background-color", "yellow")


    $("#verde")
        .css("background-color", "green")
        
    
    
    rojo.addClass("recuadro");
    amarillo.removeClass("recuadro");
    const recuadro = $(".recuadro");
    recuadro
        .css("border", "2px solid black")
        .css("border-radius", "3%")
        .css("font-size", "1.5em");
    

    $('[title="Google"]')
        .css('color', "red");
    
    var contenedor = $("#contenedor");
    // contenedor.mouseover(function(){
    //     $(this).css("background-color", "red")
    // })
    // contenedor.mouseout(function(){
    //     $(this).css("background-color", "green")
    // })

    
    function cambiaRojo(){
        $(this).css("background-color", "red");
    }
    function cambiaVerde(){
        $(this).css("background-color", "green");
    }

    contenedor.hover(cambiaRojo, cambiaVerde);

    $(document).mousemove(function(){

        $("html").css("cursor", "none");
        $("#sigueme")
            .css("left", event.clientX+1)
            .css("top", event.clientY-1);

    })

    $("#add-button")
        .click(function(){
            $("#menu").prepend("<li><a href = '"+ $("#add-link").val() +"'>" + $("#add-link").val() + "</a></li>");
            localStorage.setItem("links", JSON.stringify($("#add-link").val()));

            $("#add-link").val("");

        })
    
    var caja = $("#contenedor");
    $("#animar"/*document*/).click(function(){



        caja.animate({
            marginLeft: "400px",
            fontSize: "40x",
            height: "120px",}, "slow")
             .animate({
                borderRadious: "25%",
                marginTop: "200px"
            }, "fast")
    })

    
    caja.draggable();


});

