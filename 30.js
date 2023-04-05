const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n1, n2;

r.question("Introduce n1: ", num1 => {
  n1 = parseFloat(num1);
  r.question("Introduce n2: ", num2 => {
    n2 = parseFloat(num2);
    menu();
  });
});

function menu() {
  console.log("1. Suma");
  console.log("2. Resta");
  console.log("3. Multiplicación");
  console.log("4. División");
  r.question("Elige una opción: ", opc => {
    switch (opc) {
      case "1":
        console.log( `${n1} + ${n2} = `+ (n1+n2));
        r.close();
        break;
      case "2":
        console.log( `${n1} - ${n2} = `+ (n1-n2));
        r.close();
        break;
      case "3":
        console.log( `${n1} * ${n2} = `+ (n1*n2));
        r.close();
        break;
      case "4":
        console.log( `${n1} / ${n2} = `+ (n1/n2));
        r.close();
        break;
      default:
        console.log("Opción inválida.");
        menu();
        break;
    }
  });
}
