var listacontactos = JSON.parse(localStorage.getItem("listacontactos")) || [];


var contador= 1;
const root = document.querySelector(':root');
function cambiar(){

    if(contador%2==0){

        root.style.setProperty('--backcolor', '#00214A');

    }else{
        root.style.setProperty('--backcolor', '#004A46');



    }
    contador++;
    document.querySelector("#avatar").src = `/pruebapractica1842/img/avatar${contador}.jpg`;


    if(contador>=4){
        contador=0;
    }
}




function enviar(){
    var contactodt = {  //Creamos un objeto con todos los datos insertados en el input
        nombre: document.querySelector("#nombre").value,
        correo: document.querySelector("#correo").value,
        asunto: document.querySelector("#asunto").value,
        mensaje: document.querySelector("#mensaje").value
    }
    listacontactos.push(contactodt);
    localStorage.setItem("listacontactos", JSON.stringify(listacontactos))   //Lo guardamos en la memoria local
}

