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
	switch(mes){

		case "octubre": //Si el mes es octubre...
			total*=0.85; //Aplicamos descuento
			break;
			//Si no es ocutubre, no entramos en la cláusula IF, y no aplicamos descuento
		case "enero":
			total*=0.80; //Aplicamos descuento
			break;
		case "febrero":
			total*=0.80; //Aplicamos descuento	
			break;
		case "julio":
			total*=0.85; //Aplicamos descuento
			break;
		case "agosto":
			total*=0.85; //Aplicamos descuento
			break;
		case "noviembre":
			total*=0.75; //Aplicamos descuento
			break;
		case "diciembre":
			total*=0.75; //Aplicamos descuento
			break;
		default:
			total*=1;
	}
	alert("Dinero a pagar: "+total+"€");
	debugger;





	// switch (expr) {
	// 	case 'octubre':
	// 	  console.log('El kilogramo de naranjas cuesta $0.59.');
	// 	  break;
	// 	case 'enero':
	// 	  console.log('El kilogramo de manzanas cuesta $0.32.');
	// 	  break;
	// 	case 'febrero':
	// 	  console.log('El kilogramo de platanos cuesta $0.48.');
	// 	  break;
	// 	case 'julio':
	// 	  console.log('El kilogramo de cerezas cuesta $3.00.');
	// 	  break;
	// 	case 'agosto':
	// 	case 'Papayas':
	// 	  console.log('El kilogramo de mangos y papayas cuesta $2.79.');
	// 	  break;
	// 	default:
	// 	  console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
	//   }


}
