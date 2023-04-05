function matriz() {
    let matriz = [];
    for (let i = 0; i < 4; i++) {
      let fila = [];
      for (let j = 0; j < 5; j++) {
        fila.push(parseInt(Math.random() * 100)) + 1;
      }
      matriz.push(fila);
    }
    console.log(matriz);
}

function matrizTranspuesta(matriz) {
    let filas = matriz.length;
    let columnas = matriz[0].length;
    let transpuesta = [];
    for (let j = 0; j < columnas; j++) {
      let fila = [];
      for (let i = 0; i < filas; i++) {
        fila.push(matriz[i][j]);
      }
      transpuesta.push(fila);
    }
    return matrizTranspuesta;
  }
  
mat= matriz();
matrizTranspuesta(mat);


