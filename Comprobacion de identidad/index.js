var username = prompt("Introduzca su nombre de usuario");

if(username=="Admin"){
    var password = prompt("Introduzca su contraseña");
    if(password=="Webmaster"){
        alert("Bienvenido!");
    }else if(password==""){
        alert("Cancelado");
    }else{
        alert("Incorrecta");
    }

}else if(username==""){
    alert("Cancelado");
}else{
    alert("Incorrecto");
}