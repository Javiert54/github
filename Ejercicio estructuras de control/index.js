var number = parseInt(prompt("Introduzca un número entero, y le devolveremos su tabla"));
for(var multiplier =0; multiplier<=10; multiplier++){
    document.write((number*multiplier)+"<br>");
}
    document.write("Todas las tablas del 1 al 10: "+"<br>")
for(multiplier =1; multiplier<=10; multiplier++){
    document.write("TABLA DEL "+multiplier+": "+"<br>")
    for(i =0; i<=10; i++){
        document.write(i+"*"+multiplier+"="+i*multiplier+"<br>")

    }


}

document.write("TABLAS DEL 1 AL "+ number+":<br>")
for(multiplier =1; multiplier<=number; multiplier++){
    document.write("TABLA DEL "+multiplier+": "+"<br>")
    for(i =0; i<=10; i++){
        document.write(i+"*"+multiplier+"="+i*multiplier+"<br>")

    }
}