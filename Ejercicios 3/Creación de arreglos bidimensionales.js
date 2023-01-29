//Creación de arreglos bidimensionales
//1
let arr = new Array(3);
let numeros = 0;
for(var i = 0; i < arr.length; i++){
    arr [i] = new Array (j);
    for(var j = 0; j < 4; j++){
        arr[i][j] = numeros++;
    }
}
console.log(arr);

//2
arr = new Array(3);
numeros = 0;
let aumento = 1;
for(i = 0; i < arr.length; i++){
    arr [i] = new Array (j);
    for(j = 0; j < 4; j++){
        arr[i][j] = numeros;
        numeros += aumento;
        aumento+=2;
    }
}
console.log(arr);

//3
arr = new Array(4);
numeros = 0;
for(i = 0; i < arr.length; i++){
    arr [i] = new Array(3);
    numeros = i;
    for(j = 0; j < 3; j++){
        arr[i][j] = numeros;
        numeros += 4;
    }
}
console.log(arr);

//4
arr = new Array(3);
numeros = 0;
for(i = 0; i < arr.length; i++){
    arr[i] = new Array(3);
    for(j = 0; j < 3; j++){
        arr[i][j] = numeros;
        numeros++;
    }
    numeros++;
}
console.log(arr);

//5
arr = new Array(3);
numeros = 11;
for(i = 0; i < arr.length; i++){
    arr [i] = new Array (j);
    for(j = 0; j < 4; j++){
        arr[i][j] = (numeros--)+0.5;
    }
}
console.log(arr);

//6
arr = new Array(3);
numeros = 0;
for(i = 0; i < arr.length; i++){
    arr [i] = new Array (j);
    let columna = 100;
    for(j = 0; j < 4; j++){
        arr[i][j] = (numeros++)+columna;
        columna+=100;
    }
}
console.log(arr);

//7
arr = new Array(3);
numeros = 0;
let fila = 100;
for(i = 0; i < arr.length; i++){
    arr [i] = new Array (j);
    for(j = 0; j < 4; j++){
        arr[i][j] = (numeros++)+fila;
    }
    fila += 100;
}
console.log(arr);