//1. Escreva um programa que mostre na tela a mensagem: "Olá, mundo!'
console.log('Olá, mundo!');

// 2. Faça um programa que leia o nome de uma pessoa e de boas vindas. ex.: “Olá, Lucas!”

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout,});

rl.question("Escreva seu nome: ", (nome) => {
  console.log(`Olá, ${nome}!`);
  rl.close();
});

// 3. Faça um programa que leia o nome do funcionário e seu salário e mostre uma mensagem como a do exemplo:
//  O funcionário Lucas recebe R$2000,00 por mês.

rl.question("Ola! Digite o nome do funcionario: ", (nome), "Digite o salario dele: ", (sal) => {
   console.log(`o funcionario ${nome} recebe o salario ${sal} reais`);
   rl.close();
 });
