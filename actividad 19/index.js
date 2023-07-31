var alumnos = [];
var submitidas = 0;
var label = "Introduzca un código: ";
var datosAlumn = [];
document.getElementById("label").innerHTML = label;
var maxvalue = 1;
function datos() {
    var dato = document.getElementById("input").value

    if (dato != "") {

        datosAlumn[submitidas % 5] = dato
        // datosAlumn.push(dato);





        if (submitidas % 5 == 4) {  //Sé que esto es innesesariamente complicado. Solo quería utilizar el mismo input para todo.
            // submitidas = 0;

            datosAlumn[6] = document.querySelector("#tema").value;



            nuevo = document.createElement("td");
            document.getElementById(`id${parseInt((submitidas+1 ) / 5)}`).appendChild(nuevo);
            nuevo.id = "tema" + submitidas;  //Ponemos "2id" para que los id de cada <td> no se solapen con los id de los <tr>


            nuevo = document.createElement("tr");
            document.querySelector("#tbody").appendChild(nuevo);
            nuevo.id = "id" + parseInt(submitidas+1 / 5);

            label = "Introduzca un código: ";
            document.querySelector("#input").type = "number";
            document.querySelector(`#tema${submitidas}`).innerHTML = document.querySelector("#tema").value;
            alumnos.push(datosAlumn);   //Antes de resetear el array datosAlumn, lo metemos en alumnos
            datosAlumn = [];
        } else if (submitidas % 5 == 0) {
            label = "Nombre y Apellidos: ";
            document.querySelector("#input").type = "text";
        } else if (submitidas % 5 == 1) {
            label = "Edad: ";
            document.querySelector("#input").type = "number";
        } else if (submitidas % 5 == 2) {
            label = "Correo electrónico: "
            document.querySelector("#input").type = "email";
        } else if (submitidas % 5 == 3) {
            label = "Teléfono: "
            document.querySelector("#input").type = "number";
        } else {
            alert("ALGO VA MAL");
        }
        console.log("submitidas%5: " + submitidas % 5)




        document.getElementById(`2id${submitidas / 5}`).innerHTML = dato;
        maxvalue = Math.max(maxvalue, submitidas);
        if (datosAlumn.length == maxvalue) {
            var nuevo = document.createElement("td");
            document.getElementById(`id${parseInt((submitidas) / 5)}`).appendChild(nuevo);
            nuevo.id = "2id" + (submitidas) / 5;  //Ponemos "2id" para que los id de cada <td> no se solapen con los id de los <tr>

        }
        submitidas++;


        document.getElementById("input").value = "";  //Borramos el contenido del input


        document.getElementById("label").innerHTML = label;
    } else {
        alert("Por favor, no deje el espacio vacío")
    }





    document.getElementById("array").innerHTML = "Array de alumnos: " + alumnos;
}



function back() {
    if (submitidas > 0) {




        submitidas--;
        if (submitidas % 5 == 0) {  //Sé que esto es innesesariamente complicado. Solo quería utilizar el mismo input para todo.
            // submitidas = 0;

            // datosAlumn.push(document.getElementById("tema").value);
            // alumnos.push(datosAlumn);   //Antes de resetear el array datosAlumn, lo metemos en alumnos
            // var nuevo = document.createElement("td");
            // document.getElementById(`id${parseInt((submitidas - 1) / 5)}`).appendChild(nuevo);
            // nuevo.id = "tema" + submitidas;  //Ponemos "2id" para que los id de cada <td> no se solapen con los id de los <tr>
            // document.getElementById(`tema${submitidas}`).append(document.getElementById("tema").value);

            // nuevo = document.createElement("tr");
            // document.getElementById("respuesta").appendChild(nuevo);
            // nuevo.id = "id" + parseInt(submitidas / 5);
            datosAlumn = alumnos[alumnos.length];
            label = "Introduzca un código: ";
            document.getElementById("input").type = "number";
        } else if (submitidas % 5 == 1) {
            label = "Nombre y Apellidos: ";
            document.getElementById("input").type = "text";
        } else if (submitidas % 5 == 2) {
            label = "Edad: ";
            document.getElementById("input").type = "number";
        } else if (submitidas % 5 == 3) {
            label = "Correo electrónico: "
            document.getElementById("input").type = "email";
        } else if (submitidas % 5 == 4) {
            label = "Teléfono: "
            document.getElementById("input").type = "number";
        } else {
            alert("ALGO VA MAL");
        }

        document.getElementById("label").innerHTML = label;
    }

}