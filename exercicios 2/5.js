// sistema de viajens

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quantos km deseja viajar: ", (km) => {
  if (km <= 200) {
    const pass = km * 0.50; //pass = passagem

    console.log(
      `se você deseja viajar ${km}km, você tera que pagar: R$${pass.toFixed(2)}`
    );
  } else {
    const pass = km * 0.45; //pass = passagem

    console.log(
      `se você deseja viajar ${km}km, você tera que pagar: R$${pass.toFixed(2)}`
    );
  }

  rl.close();
});
