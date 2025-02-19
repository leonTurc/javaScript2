/*8. Faça um algoritmo que leia a largura e altura de uma parede e mostre a área a ser pintada
e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('bem vindo ao sistema area por litros!')

rl.question("Digite a largura: ", (largura) => {
  rl.question("Digite a altura da parede: ", (altura) => {
    const area = largura * altura;
    const tintaNecessaria = area / 2;

    console.log(
      `Área da parede: ${area}m² \nQuantidade de tinta necessaria: ${tintaNecessaria} litros`
    );

    rl.close();
  });
});
