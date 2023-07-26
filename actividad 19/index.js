var alumnos = [];
var submitidas = 0;
var label = "Introduzca un código: ";
var datosAlumn = [];
document.getElementById("label").innerHTML = label;
function datos() {
    var dato=document.getElementById("input").value

    if(dato!=""){
        datosAlumn.push(dato);

        var nuevo = document.createElement("td");
        document.getElementById(`id${parseInt(submitidas/5)}`).appendChild(nuevo);
        nuevo.id="2id"+submitidas/5;  //Ponemos "2id" para que los id de cada <td> no se solapen con los id de los <tr>
        document.getElementById(`2id${submitidas/5}`).append(dato);
        submitidas += 1;
        document.getElementById("input").value= "";  //Borramos el contenido del input

        if (submitidas%5==0) {  //Sé que esto es innesesariamente complicado. Solo quería utilizar el mismo input para todo.
            // submitidas = 0;
    
            datosAlumn.push(document.getElementById("tema").value);
            alumnos.push(datosAlumn);   //Antes de resetear el array datosAlumn, lo metemos en alumnos
            var nuevo = document.createElement("td");
            document.getElementById(`id${parseInt((submitidas-1)/5)}`).appendChild(nuevo);
            nuevo.id="tema"+submitidas;  //Ponemos "2id" para que los id de cada <td> no se solapen con los id de los <tr>
            document.getElementById(`tema${submitidas}`).append(document.getElementById("tema").value);
    
            nuevo= document.createElement("tr");
            document.getElementById("respuesta").appendChild(nuevo);
            nuevo.id="id"+parseInt(submitidas/5);
            datosAlumn = [];
            label = "Introduzca un código: ";
            document.getElementById("input").type = "number";
        } else if (submitidas%5==1) {
            label = "Nombre y Apellidos: ";
            document.getElementById("input").type = "text";
        } else if (submitidas%5==2) {
            label = "Edad: ";
            document.getElementById("input").type = "number";
        } else if (submitidas%5==3) {
            label = "Correo electrónico: "
            document.getElementById("input").type = "email";
        } else if (submitidas%5==4) {
            label = "Teléfono: "
            document.getElementById("input").type = "number";
        } else {
            alert("ALGO VA MAL");
        }
        console.log("submitidas%5: "+submitidas%5)
    
    
    
        document.getElementById("label").innerHTML = label;
    }else{
        alert("Por favor, no deje el espacio vacío")
    }





    document.getElementById("array").innerHTML="Array de alumnos: "+alumnos;
}
