//5. Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe a primeira nota: ", (nota1) => {
  rl.question("Informe a segunda nota: ", (nota2) => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    const media = (n1 + n2) / 2;
    console.log(`A média do aluno é: ${media.toFixed(2)}`);
    rl.close();
  });
});
