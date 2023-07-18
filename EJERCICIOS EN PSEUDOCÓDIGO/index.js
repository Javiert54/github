// Escribir &quot;Introduce el primer número&quot;
// Leer numero1
// Escribir &quot;Introduce el segundo número&quot;
// Leer numero2
// //inicializamos la variable resultado a 0 (recomendable)
// resultado&lt;-0
// //sumamos los números y escribimos su resultado
// resultado&lt;-numero1+numero2
// Escribir resultado
// //restamos los números y escribimos su resultado
// resultado&lt;-numero1-numero2
// Escribir resultado
// //multiplicamos los números y escribimos su resultado
// resultado&lt;-numero1*numero2
// Escribir resultado
// //dividimos los números y escribimos su resultado
// resultado&lt;-numero1/numero2
// Escribir resultado


function operar() {
    var primer = Number(document.getElementById("primer").value);
    var segun = Number(document.getElementById("segun").value);

    console.log(primer + segun);

}