
const deposito = 300;
const objetivo = 100000;
const rendimento = 0.1;

let conta = 0;
let meses = 0;

//todo ano ela rende 10%.
//todo mês fazer um deposito

//quantos meses demora para chegar em 100.000.

while (conta < 100000) {
  conta += 500;
  conta += conta * rendimento / 12;
  meses += 1;
}

console.log("demorou", meses, "meses");
console.log("demorou", meses / 12, "anos");