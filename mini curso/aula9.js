
//quantos numero entre 1 e 1000 são multiplos de 17

let resposta = 0;
let numero = 1;
//ele faz repetições
while (numero <= 1000) {
  if (numero % 17 === 0) {
    resposta += 1;
  }
  numero += 1;
}
console.log("Resposta é", resposta);