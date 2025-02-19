//10. Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o salario atual: ", (sal) => {

  const aum = 0.15;
  const newSal = sal * (1 + aum);

  console.log(`Novo salário com aumento de 15%: R$${newSal.toFixed(2)}`);
  rl.close();
});
