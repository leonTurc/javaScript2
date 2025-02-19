// promoção feminista

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("nome do cliente: ", (nome) => {
  rl.question("cliente homem ou mulher: ", (gen) => {
    rl.question("valor da compra: ", (val) => {
      if (gen.toLowerCase() === "homem") {
        let valFim = parseFloat(val) - parseFloat(val) * 0.05;
        console.log(
          `ola ${nome}! \nsua compra fechou em: R$${val} \n com a promoção de 5%, o valor final ficou em: R$${valFim}`
        );
      } else if (gen.toLowerCase() === "mulher") {
        let valFim = parseFloat(val) - parseFloat(val) * 0.13;
        console.log(
          `ola ${nome}!\nsua compra fechou em: R$${val}\ncom a promoção de 13%, o valor final ficou em: R$${valFim}`
        );
      } else {
        console.log(
          "Resposta inválida. Por favor, digite 'homem' ou 'mulher'."
        );
      }
      rl.close();
    });
  });
});
