var alumnos = obtenervalor("alumnos") || [];
var nombresalumn = obtenervalor("nombresalumn") || [];


alumnos.forEach(element => {


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

        // var option = document.createElement("option");
        // option.text = alumno.nombre;
        // option.value = alumno.nombre;
        // var alumnoption = document.querySelector("#alumnoption");
        // alumnoption.add(option);

        guardar("alumnos", alumnos);
        guardar("nombresalumn", nombresalumn);
        window.location.reload();
    }

}


function editaralumno() {
    //let alumno = obtenervalor("alumnos").find(element => element.nombre == document.querySelector("#alumnoption").value);
    let alumno = alumnos.find(element => element.nombre == document.querySelector("#alumnoption").value);
    let indexalumno = alumnos.indexOf(alumno);
    console.log(typeof (document.querySelector("#atributoption").value));


    eval(document.querySelector("#atributoption").value);

    alumnos = obtenervalor("alumnos");
    alumnos[indexalumno] = alumno;
    guardar("alumnos", alumnos);
    window.location.reload();

}


function eliminaralumno(){

    alumnos = alumnos.filter(alumno => alumno.nombre!=document.querySelector("#eliminalumno").value);
    guardar("alumnos", alumnos);
    window.location.reload();
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
