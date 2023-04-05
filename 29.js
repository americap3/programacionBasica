let c= 0;

for (let i=0; i < 100; i++) {
  let dado1 = parseInt(Math.random() * 6) + 1;
  let dado2 = parseInt(Math.random() * 6) + 1;

  if (dado1 + dado2 === 10) {
    c++;
  }
}

console.log(`Los dados sumaron 10 ${c} veces`);
