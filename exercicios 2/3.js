// alistamento

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual sua idade: ", (idd) => {

  if (idd >= 18) {
    let exc = idd - 18; //exc = excesso
    if(exc == 0){
        console.log(`você tem 18 anos, ou seja, ja deve ter feito seu alistamento`)
    }else{
    console.log(`você tem ${idd}, oque significa que você ja deve ter feito seu alistamento a ${exc} anos`)
    }
  } else {
    let exc = 18 - idd; //exc = excesso
    console.log(`você tem ${idd}, oque significa que você tera que fazer seu alistamento daqui a ${exc} anos`)
  }
  
    rl.close();
  });