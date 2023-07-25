var alumnos = [];
var submitidas = 0;
var label = "Introduzca un código: ";
var datosAlumn = [];
document.getElementById("label").innerHTML = label;
function datos() {

    datosAlumn.push(document.getElementById("input").value);


    document.getElementById("input").value = "";  //Borramos el contenido del input

    if (submitidas%5==4) {  //Sé que esto es innesesariamente complicado. Solo quería utilizar el mismo input para todo.
        // submitidas = 0;

        datosAlumn.push(document.getElementById("tema").value);
        alumnos.push(datosAlumn);   //Antes de resetear el array datosAlumn, lo metemos en alumnos

        var newdiv= document.createElement("div");
        document.getElementById("respuesta").appendChild(newdiv);
        newdiv.id="id"+submitidas/5;
        document.getElementById(`id${submitidas/5}`).innerHTML="Alumno nº"+(1+submitidas)/5+"</br>Código: "+datosAlumn[0]+"</br>Nombre y Apellidos: "+datosAlumn[1]+"</br>Edad: "+datosAlumn[2]+"</br>Correo electrónico: "+datosAlumn[3]+"</br>Teléfono: "+datosAlumn[4]+"</br>Tema favorito: "+datosAlumn[5];
        datosAlumn = [];
        label = "Introduzca un código: ";
        document.getElementById("input").type = "number";
    } else if (submitidas%5==0) {
        label = "Nombre y Apellidos: ";
        document.getElementById("input").type = "text";
    } else if (submitidas%5==1) {
        label = "Edad: ";
        document.getElementById("input").type = "number";
    } else if (submitidas%5==2) {
        label = "Correo electrónico: "
        document.getElementById("input").type = "email";
    } else if (submitidas%5==3) {
        label = "Teléfono: "
        document.getElementById("input").type = "number";
    } else {
        alert("ALGO VA MAL");
    }
    submitidas += 1;
    document.getElementById("label").innerHTML = label;

    document.getElementById("array").innerHTML="Array de alumnos: "+alumnos;
}
