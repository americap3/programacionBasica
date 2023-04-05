const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Ingresa un número entero positivo = ", n=> {
  n= parseInt(n);
  for(let i = 1; i <= n; i++) {
    console.log(i);
  }
  r.close();
});