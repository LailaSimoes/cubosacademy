
//Lado A:
const pesoLadoA1 = 30
const pesoLadoA2 = 5
//Lado B:
const pesoLadoB1 = 20
const pesoLadoB2 = 10

const somaLadoA = pesoLadoA1 + pesoLadoA2
const somaLadoB = pesoLadoB1 + pesoLadoB2

if (somaLadoA > somaLadoB) {
  console.log("LADO A")
} else if (somaLadoB > somaLadoA) {
  console.log("LADO B");
} else {
  console.log("EQUILIBRIO");
}



