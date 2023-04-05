const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularFactorial (n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

r.question("Introduce n: ", num => {
  let n = parseInt(num);
  let res = calcularFactorial(n);
  console.log(`${n}! = ${res}`);
  r.close();
});
