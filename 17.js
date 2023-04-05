const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question('La serie estará entre ', n1 => {
    r.question(' y ', n2 => {
      if (n2 < n1) {
        console.log("El segundo número debe ser mayor o igual que el primero");
        r.close();
        return;
      }
      let c= 0;
      let suma= 0;
      for (let i = n1; i <= n2; i++) {
        if (i%2 == 0) {
          console.log(i);
          c++;
          suma += i;
        }
      }
      console.log(`Hay ${c} múltiplos de 2 entre ${n1} y ${n2}`);
      console.log(`La suma de estos múltiplos es= ${suma}.`);
      r.close();
    });
});
  