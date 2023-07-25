function operar() {
	let primer = Number(document.getElementById("primer").value);
	let segun = Number(document.getElementById("segun").value);

	document.getElementById("ejercicios_pseudocodigo").innerHTML = "suma: " + (primer + segun) + "<br>resta: " + (primer - segun) + "<br>multiplicación: " + (primer * segun) + "<br>división: " + (primer / segun).toFixed(2);

}
function porcent() {
	let niños = Number(document.getElementById("niños").value);
	let niñas = Number(document.getElementById("niñas").value);
	let porcentaje_niños = niños * 100 / (niños + niñas);
	let porcentaje_niñas = 100 - porcentaje_niños;
	document.getElementById("ejercicios_pseudocodigo2").innerHTML = "Porcentaje de niños: " + porcentaje_niños.toFixed(2) + "%<br>Porcentaje de niñas: " + porcentaje_niñas.toFixed(2) + "%";
}
function comparar() {

	let primer = Number(document.getElementById("Pcomparar").value);
	let segun = Number(document.getElementById("Scomparar").value);
	if (primer > segun) {
		document.getElementById("ejercicios_pseudocodigo3").innerHTML = primer + " > " + segun;
	}
	else if (primer == segun) {
		document.getElementById("ejercicios_pseudocodigo3").innerHTML = primer + " = " + segun;
	}
	else {
		document.getElementById("ejercicios_pseudocodigo3").innerHTML = primer + " < " + segun;
	}
}
var intentos = 3

function verify() {
	// Ejecutaremos el código cada vez que se pulse el botón de verificar
	if (intentos > 0) {
		var clave = document.getElementById("clave").value;
		//Leemos lo que tengamos en el cuadro de texto
		if (clave != "123456") { //Si la clave es incorrecta...
			intentos -= 1;
			alert("Clave incorrecta. Intentos restantes: " + intentos);


		} else { //Si la clave es correcta:
			alert("Clave correcta");

		}
	}
}
function refresh() {
	intentos = 3;
}



function multiplos() {  //Esta función es un pelín complicada

	number = parseInt(document.getElementById("number").value); //Recogemos el número del input
	document.getElementById("todastablas").innerHTML = "";//Esto lo pongo para que cada vez que usemos la función, se me borren todas las tablas, si es que tenía alguna ya puesta.
	if (document.getElementById("number").value == "") {
		document.getElementById("primeraTabla").innerHTML = ""; //Esto lo pongo por si el input está vacío, para 
	} else {
		let resultado = [];
		for (var multiplier = 1; multiplier <= 10; multiplier++) {
			resultado.push(" " + number + "x" + multiplier + "=" + (number * multiplier));  //Y vamos multiplicando el número del input por los números del 1 al 10
		}
		document.getElementById("primeraTabla").innerHTML = "La tabla del " + number + ":<br>" + resultado; //Imprimimos la tabla

		//Esta es quizá la parte más complicada... Quería crear un div distinto para contener cada tabla  
		for (multiplier = 1; multiplier <= number; multiplier++) {  //Recorremos todos los números entre el 1 y el número introducido
			resultado = [];  		//Reseteamos el array por cada vez que pasemos por aquí (Vamos a impirmir varios arrays, uno dentro de cada div)

			var newdiv = document.createElement("div")  //Esta variable la utilizaremos para crear tantos divs como sean necesarios. Con createElement podemos añadir elementos (como divs, por ejemplo)
			document.getElementById("todastablas").appendChild(newdiv);  //añadimos el div en "todastablas" utilizando appendChild(), que añade contenido dentro del elemento asignado.
			newdiv.id = "id" + `${multiplier}`;  //Podemos poner un ID diferente para cada div, utilizando una variable que nos garantice que no van a haber dos divs con el mismo ID
			newdiv.className = "tabla";
			for (i = 0; i <= 10; i++) {
				resultado.push(" " + multiplier + "*" + i + " = " + i * multiplier);		//Mismo proceso que en el cálculo anterior. Pero esta vez utilizando el for indentado dentro del otro for
			}
			document.getElementById("id" + `${multiplier}`).innerHTML = "Tabla del " + multiplier + ":<br>" + resultado;	//Segun vamos creando los divs les metemos a cada uno su array correspondiente
		}

		//No añadí la parte en la que sacaba las tablas de cada número entre el 1 y el 10, pero si aún así quieres verlo, te dejo aquí cómo sería:
		// for (multiplier = 1; multiplier <= 10; multiplier++) {  //La única diferencia es que en for (multiplier = 1; multiplier <= 10; multiplier++), sustituimos el tope, que originalmente estaba puesto por la variable number, y lo cambiamos por un 10
		// 	resultado = [];  		

		// 	var newdiv = document.createElement("div")  
		// 	document.getElementById("todastablas").appendChild(newdiv);  
		// 	newdiv.id = "id" + `${multiplier}`;  

		// 	for (i = 0; i <= 10; i++) {
		// 		resultado.push(i + " x " + multiplier + " = " + i * multiplier)		
		// 	}
		// 	document.getElementById("id"+`${multiplier}`).innerHTML = "Tabla de multiplicar del "+multiplier+":<br>" + resultado;	
		// }
	}
}




	function descuentos() {
		var total = Number(document.getElementById("importe").value); //Hacemos que la variable "total" sea sobre la que escribimos directamente, para ahorrarnos una variable
		var mes = document.getElementById("mes").value; //Leemos el mes
		switch (mes) {

			case "octubre": case "julio": case "agosto": //Si el mes es octubre...
				total *= 0.85; //Aplicamos descuento
				break;
			//Si no es ocutubre, no entramos en la cláusula IF, y no aplicamos descuento
			case "enero": case "febrero":
				total *= 0.80; //Aplicamos descuento
				break;
			case "diciembre": case "noviembre":
				total *= 0.75; //Aplicamos descuento
				break;
			default:
				total *= 1;
		}
		document.getElementById("Descuento_tienda").innerHTML = ("Dinero a pagar: " + total + "€");
	}
	function comprobar() {
		var input = document.getElementById("expresion").value;
		document.getElementById("Comprobador_operaciones").innerHTML = "Su respuesta es: " + eval(input) + " y es de tipo: " + typeof (eval(input));
	}

	function compIdentidad() {
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;

		if (password == "" || username == "") {
			alert("Cancelado");
		} else if (password == "Webmaster" && username == "Admin") {
			alert("Bienvenido!");
		} else {
			alert("Incorrecto");
		}
	}
