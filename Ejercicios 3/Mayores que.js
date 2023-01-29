//Numero mayor
let espacio = parseInt(prompt("Ingresa cuantos números quieres leer"));
let arr = new Array(espacio);

for (let i = 0; i < espacio; i++) {
    let numeros = parseInt(prompt("Ingresa los números:"));
    arr [i] = numeros;
}
console.log(arr);

let x = parseInt(prompt("Ingresa el valor x con cual comprar"));
let mayor = 0;
for (let i = 0; i < espacio; i++) {
  if (arr[i] > x){
    mayor++;
  }
}
console.log(mayor+" son mayores a "+x);