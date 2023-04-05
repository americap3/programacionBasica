const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Introduce un número del 0 al 10: ", (num) => {
  let n = num;
  if (n>=0 && n<=10) {
    for (let i = 0; i<= 10; i++) {
      let res = n*i;
      console.log(`${n} x ${i} = ${res}`);
    }
  } 
  else {
    console.log("El número debe estar entre 0 y 10");
  }
  r.close();
});
