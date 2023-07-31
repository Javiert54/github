//JSGN - JavaScript object Notation
//Nos permite crear objetos de forma rápida

var alumno = {
    nombre: "Crisll",
    correo: "crhimedilop@gmail.com",
    telefono: "668 54 62 64",


}

var alumnodos = {
    nombre: "Pablo Motors",
    correo: "pablo@gmail.com",
    telefono: "928 55 42 13",

}

alumno.nombre = "Crisll López";

var alumnos = [alumno, alumnodos]

var total_alumnos = document.querySelector("#totalalumnos");

var indice;

for (let indice in alumnos) {
    var p = document.createElement("p");
    p.append(alumnos[indice].nombre + "-------");
    p.append(alumnos[indice].correo + "-------");
    p.append(alumnos[indice].telefono + "-------");

    total_alumnos.append(p);
}


//LocalStorage
//Memoria en el navegador

if (typeof (Storage) != "undefined") {
    console.log("Disponible");

} else {
    console.log("No disponible");
}


//Guardar datos
localStorage.setItem("Listado", "Listado de Alumnos");

//Recuperar datos
// localStorage.setItem("Listado")

//Guardar objetos JSON
localStorage.setItem('alumno', JSON.stringify(alumno));

var alumnojs = JSON.parse(localStorage.getItem("alumno"));
console.log(alumnojs.nombre + "-------" + alumnojs.correo);

localStorage.removeItem("Listado");
// localStorage.clear();