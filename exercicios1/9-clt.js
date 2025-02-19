/*9. Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um
funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o número de dias trabalhados no mês: ",
  (diasTrab) => {

    const hPorDia = 8;
    const valPorHora = 25;
    const sal = diasTrab * hPorDia * valPorHora;

    console.log(`Salário do funcionário: R$${sal}`);
    rl.close();
  }
);
