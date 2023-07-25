function palabras() {
    let lista = [];
    let input = document.getElementById("input").value;
    lista = input.split(" ");
    document.getElementById("answer").innerHTML = "Cantidad de palabras: " + lista.length + "</br>Primera palabra: " + lista[0] + "</br>Última palabra: " + lista[lista.length - 1];
    return lista;
}
// function palabrass(){
//     return asdadad
// }