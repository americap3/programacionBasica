let c = 0;

for (let i = 0; i <=10; i++) {
  let fila = "";
  for (let j= 0; j <= 9; j++) {
    fila += c + "\t";
    c++;
  }
  console.log(fila);
}
