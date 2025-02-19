/*7. Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
 e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,60.*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quanto dinheiro você tem na carteira (em R$)? ", (rs) => {

  const valordol = 5.6;
  const dolares = rs / valordol;

  console.log(`R$${rs} equivalem á US$${dolares.toFixed(2)}.`);

  rl.close();
});
