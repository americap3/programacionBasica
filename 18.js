const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Introduce una frase: ", (frase) => {
  r.question("¿Qué letra quieres contar?: ", (l) => {
    let c = 0;
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] == l) {
        c++;
      }
    }
    console.log(`La letra "${l}" aparece ${c} veces en la frase`);
    r.close();
  });
});
