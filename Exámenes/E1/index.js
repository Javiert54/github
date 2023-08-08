const root = document.querySelector(':root');
var daltonismo = false;
$(function(){

    $( document ).tooltip();
    const root = document.querySelector(':root');
    $("#daltonismo").click(function(){

        daltonismo = !daltonismo;   //Hacemos que la variable que determina qué estilos poner valga lo contrario de lo que valía antes

        if(daltonismo){
            $("html")
            .css("background-color", "black")
            .css("color", "white");
            $(".enlace")
                .css("color", "white")
                .css("font-size", "23px");
            $(":root")
                .css("--color", "white");
        }else{
            $("html")
                .css("background-color", "white")
                .css("color", "black");
            $(".enlace")
                .css("color", "black")
                .css("font-size", "18px");
            $(":root")
            .css("--color", "black");
        }

    });

    
    function cambiaColor(){
        $(this).css("color", "root.var(--color)");
    }
    function cambiaVerde(){
        $(this).css("color", "green");
    }

    $(".enlace").hover(cambiaVerde, cambiaColor);

    $( "#seccion3" ).accordion();
    
});

root.style.setProperty('--bg-color', hexCodes[i]);





// var daltonico = false;
// function daltonismo(){

//     if(daltonico){
//         document.querySelector("#section3").style.backgroundColor = "#000000"

//     }else{


//     }



//     daltonico = !daltonico;
    


// }