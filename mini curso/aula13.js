const listaDeNumeros = [34, 14, 56, 768, 8, 81, 3, 6, 10];

//Qual a soma deles?
let acumulador = 0;

for (const numero of listaDeNumeros) {
  acumulador += numero;
}

console.log("A soma é", acumulador);

//Qual o menor deles?

let oMenorNumeroAtéAgora;

for (const numero of listaDeNumeros) {
  if (oMenorNumeroAtéAgora === undefined) {
    oMenorNumeroAtéAgora = 0;
  } else {
    if (oMenorNumeroAtéAgora < numero) {
      oMenorNumeroAtéAgora = numero;

    }
  }
}
console.log("O menor número é", oMenorNumeroAtéAgora);