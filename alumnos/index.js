var alumnos = obtenervalor("alumnos") || [];
var nombresalumn = obtenervalor("nombresalumn") || [];


alumnos.forEach(element => {
    var option = document.createElement("option");
    option.text = element.nombre;
    option.value = element;
    var eliminalumno = document.querySelector("#eliminalumno");
    eliminalumno.add(option);

    option = document.createElement("option");
    option.text = element.nombre;
    option.value = element;
    var alumnoption = document.querySelector("#alumnoption");
    alumnoption.add(option);


});



function guardar(llave, valor) {
    localStorage.setItem(llave, JSON.stringify(valor))
}
function obtenervalor(llave) {
    const datos = JSON.parse(localStorage.getItem(llave));
    return datos;
}

function añadiralumno() {
    let valido = true;
    let alumno = {

        nombre: document.querySelector("#nombre").value,
        edad: document.querySelector("#edad").value,
        identificacion: document.querySelector("#identificacion").value,
        correo: document.querySelector("#correo").value

    }

    if (alumno.nombre == "" || nombresalumn.includes(alumno.nombre)) {
        document.querySelector("#namediv").innerHTML = "Nombre inválido";
        document.querySelector("#namediv").style.color = "red";
        valido = false;

    } else {
        document.querySelector("#namediv").innerHTML = "Nombre válido";
        document.querySelector("#namediv").style.color = "green";

    }
    if (alumno.edad == "" || alumno.edad == NaN) {
        document.querySelector("#agediv").innerHTML = "Edad inválida";
        document.querySelector("#agediv").style.color = "red";
        valido = false;

    } else {
        document.querySelector("#agediv").innerHTML = "Edad válida";
        document.querySelector("#agediv").style.color = "green"
    }
    if (alumno.identificacion == "") {
        document.querySelector("#iddiv").innerHTML = "Identifación inválida";
        document.querySelector("#iddiv").style.color = "red";
        valido = false;

    } else {
        document.querySelector("#iddiv").innerHTML = "Identifación válida";
        document.querySelector("#iddiv").style.color = "green";
    }
    if (alumno.correo == "" || alumno.correo.includes("@") == false) {
        document.querySelector("#emaildiv").innerHTML = "correo inválido";
        document.querySelector("#emaildiv").style.color = "red";
        valido = false;
    } else {
        document.querySelector("#emaildiv").innerHTML = "correo válido";
        document.querySelector("#emaildiv").style.color = "green";
    }

    if (valido == true) {
        alumnos.push(alumno);
        nombresalumn.push(alumno.nombre);
        console.log(alumnos);

        var option = document.createElement("option");
        option.text = alumno.nombre;
        option.value = alumno;
        var alumnoption = document.querySelector("#alumnoption");
        alumnoption.add(option);

        guardar("alumnos", alumnos);
        guardar("nombresalumn", nombresalumn);
    }

}


function editaralumno() {
    let alumno = document.querySelector("#alumnoption").value;
    alumno = {
        nombre: document.querySelector("#nombredit").value,
        edad: document.querySelector("#edadedit").value,
        identificacion: document.querySelector("#identificacionedit").value,
        correo: document.querySelector("#correoedit").value

    }

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
