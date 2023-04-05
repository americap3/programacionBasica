function matriz() {
    const matriz = [];
    for (let i = 0; i < 4; i++) {
      const fila = [];
      for (let j = 0; j < 5; j++) {
        fila.push(parseInt(Math.random() * 100)) + 1;
      }
      matriz.push(fila);
    }
    console.log(matriz);
}
  
matriz();