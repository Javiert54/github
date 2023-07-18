var intentos =3;
function verify(){
  // Ejecutaremos el código cada vez que se pulse el botón de verificar
  if(intentos>0){
    var clave= document.getElementById("clave").value;
      //Leemos lo que tengamos en el cuadro de texto
    if(clave != "123456"){ //Si la clave es incorrecta...
      intentos-=1;
      alert("Clave incorrecta. Intentos restantes: "+ intentos);


    }else{ //Si la clave es correcta:
      alert("Clave correcta");
      
    }
  }
}


