//Sudoku
//Ejercicio 7
let prueba = [
    [3, 2, 9,  5, 7, 8,  6, 4, 1],
    [8, 4, 1,  6, 9, 2,  7, 3, 5],
    [7, 5, 6,  4, 3, 1,  9, 8, 2],
    
    [2, 1, 7,  9, 8, 4,  3, 5, 6],
    [4, 8, 5,  3, 1, 6,  2, 7, 9],
    [6, 9, 3,  7, 2, 5,  4, 1, 8],
    
    [1, 7, 8,  2, 6, 3,  5, 9, 4],
    [5, 3, 2,  1, 4, 9,  8, 6, 7],
    [9, 6, 4,  8, 5, 7,  1, 2, 3]];
  
  console.log(prueba)
  
  //comparacion 
  var numero = 0;
  var se_repiten = false;
  for(i = 0; i < 9; i++){
      let x = 1
      for(j = 0; j < 9; j++){
          numero = prueba[i][j];
          for (let linea = x; linea < 9; linea++) {
              if (numero == prueba[i][linea]) {
                  se_repiten = true;
              }
          }
          x++;
      }
  }
  
  numero = 0;
  for(j = 0; j < 9; j++){
      let y = 1
      for(i = 0; i < 9; i++){
          numero = prueba[i][j];
          for (let columna = y; columna < 9; columna++) {
              if (numero == prueba[columna][j]) {
                  se_repiten = true;
              }
          }
          y++;
      }
  }
  
  if(se_repiten == true){
      console.log("la solucion no es correcta");
  }else{
      console.log("La solucion es correcta");
  }