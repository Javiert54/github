// InicioProceso
// Escribir “escribe el importe de la compra”
// Leer importe //Int
// Escribir “Introduce el mes”
// Leer mes // String
// //Si el mes es octubre, se aplicará el descuento
// Si (mes=”octubre”) Entonces
// total&lt;-importe*0.85
// Sino
// total&lt;-importe
// FinSi
// Escribir total
// FinProceso
function descuentos(){
    var total=Number(document.getElementById("importe").value); //Hacemos que la variable "total" sea sobre la que escribimos directamente, para ahorrarnos una variable
    var mes=document.getElementById("mes").value; //Leemos el mes
    if(mes=="Octubre" || mes=="octubre"){ //Si el mes es octubre...
        total*=0.85; //Aplicamos descuento
    }
    //Si no es ocutubre, no entramos en la cláusula IF, y no aplicamos descuento

    alert("Dinero a pagar: "+total+"€");
}