const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sn () {
    r.question("¿S o N? ", letra => {
      if(letra == "S" || letra== "N") {
        console.log("OK");
        r.close();
      } 
      else {
        console.log("Error")
      }
    });
  }

sn();