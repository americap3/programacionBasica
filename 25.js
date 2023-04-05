function numRomano(num) {
    let numerosRomanos = [
      { val: 1000, l: "M" },
      { val: 900, l: "CM" },
      { val: 500, l: "D" },
      { val: 400, l: "CD" },
      { val: 100, l: "C" },
      { val: 90, l: "XC" },
      { val: 50, l: "L" },
      { val: 40, l: "XL" },
      { val: 10, l: "X" },
      { val: 9, l: "IX" },
      { val: 5, l: "V" },
      { val: 4, l: "IV" },
      { val: 1, l: "I" },
    ];
  
    let res = "";
    for (let i = 0; i < numerosRomanos.length; i++) {
      while (num >= numerosRomanos[i].val) {
        res += numerosRomanos[i].l;
        num -= numerosRomanos[i].val;
      }
    }
    return res;
  }
  
const readline = require('readline');
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

r.question("Inngrese un número para convertirlo a número romano (menor a 5000): ", num => {
    let n= parseInt(num);
    if (isNaN(n) || n < 1 || n > 5000) {
      console.log("Número invalido. No soporte :(");
    } 
    else {
      let romano = numRomano(n);
      console.log(`El número ${n} en números romanos es: ${romano}`);
    }
    r.close();
  });