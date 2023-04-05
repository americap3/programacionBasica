let sumaPares= 0;
let sumaImpares = 0;

for (let i = 1; i <= 100; i++) {
  if (i% 2 == 0) {
    sumaPares += i;
  } 
  else {
    sumaImpares += i;
  }
  console.log(i);
}

console.log("Suma de num. pares hasta 100= " + sumaPares);
console.log("Suma de num. impares hasta 100= " + sumaImpares);

