//Mayores que el promedio 
let espacio = parseFloat(prompt("¿Cuantos datos ingresaras?"));
let arr = new Array(espacio);
let aprobado = 0;
for (let i = 0; i < espacio; i++) {
    let calificacion = parseFloat(prompt("Dato "+(i+1)+":"));
    console.log("Dato "+(i+1)+": "+calificacion);  
    if (calificacion >= 6.0){
        aprobado++;
    }  
    arr [i] = calificacion;
}

console.log(aprobado+" Son calificaciones aprobatorias");