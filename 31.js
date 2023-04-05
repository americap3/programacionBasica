const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n1, n2;

r.question("Introduce n1: ", num => {
  n = parseFloat(num);
  menu();
});

function esPrimo () {
    let primo = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        primo = false;
        break;
      }
    }
    if (esPrimo) {
      console.log(`${n} es número primo`);
    } 
    else {
      console.log(`${n} no es número primo`);
    }
}

function factorial () {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  console.log(`${n}! = ${factorial}`);
}

function tablaMultiplicar () {
    for (let i = 0; i<= 10; i++) {
        let res = n*i;
        console.log(`${n} x ${i} = ${res}`);    
    }
}

function menu() {
  console.log("1. ¿Es primo?");
  console.log("2. Hallar factorial");
  console.log("3. Tabla de multiplicar");
  r.question("Elige una opción: ", opc => {
    switch (opc) {
        case "1":
            esPrimo();
            r.close();
            break;
        case "2":
            factorial();
            r.close();
            break;
        case "3":
            tablaMultiplicar();
            r.close();
            break;
        default:
            console.log("Opción inválida");
            menu();
            break;
    }
  });
}
