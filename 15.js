const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Introduce un número: ", n1 => {
    r.question("Introduce otro número: ", n2 => {
        let c= 0;
        let pares=0;
        let sumaImpares= 0;
        let max=0;
        let min=0;
        if (n1>n2){
            max= n1;
            min= n2;
        }
        else if (n2>n1){
            max= n2;
            min= n1;
        }
        else {
            console.log("n1 y n2 son iguales")
        }

        for (let i = parseInt(min); i <= parseInt(max); i++) {
            console.log(i);
            c++;
            if (i % 2 == 0) {
              pares++;
            } 
            else if (i%2 != 0) {
              sumaImpares += i;
            }
          }
        console.log(`Hay ${c} números entre ${min} y ${max}`);
        console.log(`De los cuales, ${pares} son pares`);
        console.log(`Suma de números impares= ${sumaImpares}`);
        r.close();
    });
});
  