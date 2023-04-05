let c= 0;

for (let i = 1; i <= 100; i++) {
  if (i%2 == 0 || i%3 == 0) {
    console.log(i);
    c++;
  }
}

console.log(`Hay ${c} múltiplos de 2 y 3`);
