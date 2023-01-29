//Producto interno 
let arr1 = new Array (3);
let arr2 = new Array (3);

for (let i = 0; i < 3 ; i++) {
    var numeros = parseInt(prompt("Ingresa el vector a"));
    arr1 [i] = numeros;
}

for (i = 0; i < 3 ; i++) {
    numeros = parseInt(prompt("Ingresa el vector b"));
    arr2 [i] = numeros;
}
console.log("A: "+arr1);
console.log("B: "+arr2);

let suma = 0;
for (i = 0; i < 3; i++) {
  suma += arr1 [i] * arr2 [i];
  
}
console.log("Producto interno: "+suma);

if(suma > 0){
    console.log("a y b no son ortogonales");
}else{
    console.log("a y b son ortogonales");
}