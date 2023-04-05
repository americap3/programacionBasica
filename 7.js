const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

let c= 0;

function contarFrases() {
  r.question("Introduce una frase (si deseas terminar escribe STOP)): ", frase => {
    if(frase == "STOP") {
      console.log(`Ingresaste ${c} frases`);
      r.close();
    } 
    else {
      c++;
      contarFrases();
    }
  });
}

contarFrases();