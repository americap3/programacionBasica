const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let c= 0;

function fun () {
    r.question("Introduce un número entero = ", n => {
      for(let i = 1; i <= n; i++) {
        if(i%3 ==  0) {
          console.log(i);
          r.close();
          c++;
        } 
      }
      console.log(`Hay ${c} multiplos de 3 desde 1 hasta ${n}`);
    });
  }

fun();