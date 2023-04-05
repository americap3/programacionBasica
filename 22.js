const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Introduce una frase: ", frase => {
    for (let i = 0; i < 5; i++) {
      let esp = "";
      for (let j = 0; j < i*4; j++) {
        esp += " ";
      }
      console.log(esp + frase);
    }
    
    r.close();
  });

