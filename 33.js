const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cals = [];
let suma = 0;

r.setPrompt("Introduce una calificación: ");
r.prompt();
r.on("line", (line) => {
  let c = parseFloat(line.trim());
  if (!isNaN(c)) {
    cals.push(c);
    suma += c;
    if (cals.length < 10) {
      r.prompt();
    } else {
      let media = suma / cals.length;
      console.log("El promedio del alumno es: " + media);
      r.close();
    }
  }
});
