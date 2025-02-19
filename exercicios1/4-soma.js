//4. Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe numero A: ", (a) => {
  rl.question("Informe o numero B: ", (b) => {
    
    const soma = parseInt(a) + parseInt(b);
    console.log(`A soma entre A e B é: ${soma}`);
    rl.close();
  });
});
