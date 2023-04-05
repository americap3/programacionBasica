const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fun () {
    r.question("Introduce un número= ", n => {
      if(n > 0) {
        console.log("Es positivo");
        r.close();
      } 
      else if (n<0) {
        console.log("Es negativo")
        r.close();
      }
      else {
        console.log ("El número es 0")
      }
    });
  }

fun();