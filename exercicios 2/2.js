//ler se um ano é bissexto

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um ano: ", (ano) => {

  if (ano % 4 == 0) {
    console.log(`${ano}: é um ano bissexto`)
  } else {
    console.log(`${ano}: é um ano comum`)
  }
  
    rl.close();
  });
  