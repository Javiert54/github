// InicioProceso
// Escribir &quot;Introduce el numero de niños&quot;
// Leer numero_niños
// Escribir &quot;Introduce el numero de niñas&quot;
// Leer numero_niñas
// //calculamos el porcentaje
// porcentaje_niños&lt;-numero_niños*100/(numero_niños+numero_niñas)
// porcentaje_niñas&lt;-100-porcentaje_niños
// Escribir &quot;Hay un &quot; porcentaje_niños &quot; % de niños
// Escribir &quot;Hay un &quot; porcentaje_niñas &quot; % de niñas&quot;
// FinProceso

function porcent(){
    var niños= Number(document.getElementById("niños").value);
    var niñas= Number(document.getElementById("niñas").value);
    var porcentaje_niños=niños*100/(niños+niñas);
    var porcentaje_niñas= 100-porcentaje_niños;
    console.log("Porcentaje de niños: "+porcentaje_niños+"%\n"+"Porcentaje de niñas: "+porcentaje_niñas+"%");
}
