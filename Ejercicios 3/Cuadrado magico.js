//Cuadrado magico
let n = parseInt(prompt("Leer arreglo, inserta el tamaño n:"));
let arr = new Array(n);
let numeros = new Array(n*n);
let posicion = 0, Es_igual = true;

for(var i = 0; i < arr.length; i++){
    arr[i] = new Array(j);
    for(var j = 0; j < arr.length; j++){
        let numero = parseInt(prompt("Ingresa el numeros"));
        arr[i][j] = numero;
        numeros [posicion]= numero;
        posicion++;
    }
}
console.log(arr);

//Filas
let filas = new Array(n);
for(i = 0; i < arr.length; i++){
    var suma = 0;
    for(j = 0; j < arr.length; j++){
        suma += arr[i][j];
    }
    filas [i]= suma;
}

for(i = 1; i < arr.length; i++){
    if(filas[0] != filas[i]){
        Es_igual = false;
        break;
    }
}

//Columnas 
let columnas = new Array(n);
for(j = 0; j < arr.length; j++){
    suma = 0;
    for(i = 0; i < arr.length; i++){
        suma += arr[i][j];
    }
    columnas [j] = suma;
}

for(i = 1; i < arr.length; i++){
    if(columnas[0] != columnas[i]){
        Es_igual = false;
        break;
    }
}

//diagonales
let diagonal_1 = 0, diagonal_2 = 0;
j = 0;
for(i = 0; i < arr.length; i++){
    diagonal_1 += arr [i][j];
    j++;
}

j = n;  
for(i = 0; i < arr.length; i++){
    j--;
    diagonal_2 += arr [i][j];
}

if(diagonal_1 != diagonal_2){
    Es_igual = false;
}

//numeros consecutivos
numeros.sort();
let consecutivos = true;
for(i = 0; i < numeros.length - 1; i++){
    if(numeros[i] + 1 != numeros[i+1]){
        consecutivos = false; 
		break;
    }
}

//Verificaciones 
if (consecutivos == true){
    console.log("El arreglo si tiene numeros consecutivos");
}else{
    console.log("El arreglo no tiene numeros consecutivos");
}

if (Es_igual == true){
    console.log("El arreglo es un cuadrado magico");
}else{
    console.log("El arreglo no es un cuadrado magico");
}