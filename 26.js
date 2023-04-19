const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Introduce una frase: ", frase => {
  let ancho = process.stdout.columns;
  let espac = " ".repeat(Math.floor((ancho - frase.length) / 2));
  console.log(espac+ frase);
  r.close();
});
