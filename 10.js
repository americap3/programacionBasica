const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fun () {
    r.question("Introduce un número entero = ", n => {
      if(n%2 ==  0) {
        console.log("Número PAR");
        r.close();
      } 
      else {
        console.log("Número IMPAR")
        r.close();
      }
    });
  }

fun();