let sumaPares= 0;
let sumaImpares = 0;

for (let i = 1; i <= 1000; i++) {
  if (i% 2 == 0) {
    sumaPares += i;
  } 
  else {
    sumaImpares += i;
  }
}

console.log("Suma de num. pares hasta 1000= " + sumaPares);
console.log("Suma de num. impares hasta 1000= " + sumaImpares);

