var alumnos = obtenervalor("alumnos") || [];
var nombresalumn= [];
for(var i=0; i<alumnos.length;i++){
    nombresalumn [i] = alumnos[i].nombre;
}



alumnos.forEach(element => {  //Esto es necesario para que en los select de "editaralumno()" y "elimninaralumno()" se vean todos los alumnos


    option = document.createElement("option");
    option.text = element.nombre;
    option.value = element.nombre;
    var alumnoption = document.querySelector("#alumnoption");
    alumnoption.add(option);
    var option = document.createElement("option");
    option.text = element.nombre;
    option.value = element.nombre;
    var eliminalumno = document.querySelector("#eliminalumno");
    eliminalumno.add(option);

});



function guardar(llave, valor) {    //Función para guardar información en la memoria local
    localStorage.setItem(llave, JSON.stringify(valor))
}
function obtenervalor(llave) {      //Función para obtener información de la memoria local
    const datos = JSON.parse(localStorage.getItem(llave));
    return datos;
}

function añadiralumno() {       //Función para añadir alumnos
    let valido = true;      //Por defecto, el alumno es válido para ser añadido
    let alumno = {

        nombre: document.querySelector("#nombre").value,
        edad: document.querySelector("#edad").value,
        identificacion: document.querySelector("#identificacion").value,
        correo: document.querySelector("#correo").value

    }

    if (alumno.nombre == "" || nombresalumn.includes(alumno.nombre)) {  //Si el input del nombre está vacío o ya existe dentro de la lista de alumnos, no será válido
        document.querySelector("#namediv").innerHTML = "Nombre inválido";
        document.querySelector("#namediv").style.color = "red";
        valido = false;

    } else {
        document.querySelector("#namediv").innerHTML = "Nombre válido";
        document.querySelector("#namediv").style.color = "green";

    }
    if (alumno.edad == "" || alumno.edad == NaN) {      //Si el input de la edad está vacío o no es un número, el alumno no será válido
        document.querySelector("#agediv").innerHTML = "Edad inválida";
        document.querySelector("#agediv").style.color = "red";
        valido = false;

    } else {
        document.querySelector("#agediv").innerHTML = "Edad válida";
        document.querySelector("#agediv").style.color = "green"
    }
    if (alumno.identificacion == "") {                  //Si el input de la identificación está vacío, no será válido
        document.querySelector("#iddiv").innerHTML = "Identifación inválida";
        document.querySelector("#iddiv").style.color = "red";
        valido = false;

    } else {
        document.querySelector("#iddiv").innerHTML = "Identifación válida";
        document.querySelector("#iddiv").style.color = "green";
    }
    if (alumno.correo == "" || alumno.correo.includes("@") == false) { //Si el input del correo está vacío o no contiene una arroba, no será válido
        document.querySelector("#emaildiv").innerHTML = "correo inválido";
        document.querySelector("#emaildiv").style.color = "red";
        valido = false;
    } else {
        document.querySelector("#emaildiv").innerHTML = "correo válido";
        document.querySelector("#emaildiv").style.color = "green";
    }

    if (valido == true) {   //Si el alumno resulta ser válido, lo guardamos en la memoria local
        alumnos.push(alumno);
        // console.log(alumnos);

        guardar("alumnos", alumnos);
        window.location.reload();   //Refrescamos la página para que se actialicen las opciones de ambos selects
    }

}


function editaralumno() {

    let alumno = alumnos.find(element => element.nombre == document.querySelector("#alumnoption").value);   //Creamos un objeto igual al objeto con el nombre especificado en el select
    let indexalumno = alumnos.indexOf(alumno);          //Averiguamos la posición en el array del objeto que hemos copiado
    // console.log(typeof (document.querySelector("#atributoption").value));


    eval(document.querySelector("#atributoption").value);      //Ejecutamos el código insertado en el valor de la opción del select (EJEMPLO:  alumno.nombre = document.querySelector("#atributo").value)

    alumnos[indexalumno] = alumno;  //Sustituimos el objeto con el atributo antiguo por el nuevo
    guardar("alumnos", alumnos);    //Lo guardamos
    window.location.reload();       //Y refrescamos la página para que los select siempre estén actualizados

}


function eliminaralumno(){

    alumnos = alumnos.filter(alumno => alumno.nombre!=document.querySelector("#eliminalumno").value);   //Creamos un array que no contenga el alumno que queremos eliminar
    guardar("alumnos", alumnos);    //Guardamos el array

    window.location.reload();       //Y refrescamos la página para que los select siempre estén actualizados
}












var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];

// fetch("https://reqres.in/api/users?page=2")
// .then(data => data.json())
// .then(user => {
//     usuarios = user.data;
//     console.log(usuarios);
//     usuarios.map((user, i) => {
//         let nombre = document.createElement("h3");
//         nombre.innerHTML = (i+1) + " " + user.first_name + " " + user.last_name;
//     })
//     div_usuarios.append(nombre);

//     // document.querySelector("loading").style.display = "none";

// })
