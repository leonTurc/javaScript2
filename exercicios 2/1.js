//calculo de velocidade e excesso

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("A qual velocidade o carro tava indo: ", (vel) => {
  if (vel > 80) {
    const exc = vel - 80; //exc = excesso
    const mult = exc * 5.0; //mult = multa

    console.log(
      `o carro estava a ${vel}km/h, você estava ${exc}km acima do maximo \nvocê tera que pagar R$${mult}`
    );
  } else {
    console.log("tudo nos conformes, siga assim!");
  }

  rl.close();
});
