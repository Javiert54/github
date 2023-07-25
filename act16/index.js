var matriz = [[1, 2, 3], [4, 5, 6],[7, 8, 9]];
for(var i=0;i<matriz.length;i++){
    document.write("Submatriz nº"+(i+1)+":</br>");
    for(let p=0;p<matriz[i].length;p++){
        document.write(matriz[i][p]+"</br>");
    }
}
