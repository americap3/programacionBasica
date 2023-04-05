const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nums= [];

r.question("N1= ", (n1) => {
  nums.push(Number(n1));
  r.question("N2= ", (n2) => {
    nums.push(Number(n2));
    r.question("N3= ", (n3) => {
      nums.push(Number(n3));
      r.question("N4= ", (n5) => {
        nums.push(Number(n5));
        r.question("N5= ", (n5) => {
          nums.push(Number(n5));

          let mayor = nums[0];
          let menor = nums[0];

          for (let i=1; i< nums.length; i++) {
            if (nums[i] > mayor) {
              mayor = nums[i];
            }
            else if (nums[i] < menor) {
              menor = nums[i];
            }
          }
          console.log("Mayor= " + mayor);
          console.log("Menor= " + menor);

          r.close();
        });
      });
    });
  });
});

