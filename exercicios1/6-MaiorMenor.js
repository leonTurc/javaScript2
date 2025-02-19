//6. Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número inteiro: ", (num) => {
  const antecessor = parseInt(num) - 1;
  const sucessor = parseInt(num) + 1;

  console.log(
    `O antecessor de ${num} é ${antecessor} O sucessor de ${num} é ${sucessor}`
  );

  rl.close();
});
