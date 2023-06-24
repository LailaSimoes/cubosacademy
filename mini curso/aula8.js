//Declarando a idade e se possui carteirinha de meia entrada:
const idade = 20;
const temCarteirinha = true;

const ehAdulta = idade >= 18 && idade <= 60;
//Se for menor de idade ou idoso ou possui carteirinha você paga meia.
if (idade < 18 || idade > 60 || (ehAdulta && temCarteirinha)) {
  console.log("MEIA");
  //senão você paga inteira.
} else {
  console.log("INTEIRA");
}