let preçoDoProduto1 = 19.29;
let preçoDoProduto2 = 0.80;
let preçoDoProduto3 = 4.85;

let custo = 0;

if (preçoDoProduto1 <= 18) {
  console.log("Comprei o produto 1");
  custo += custo + preçoDoProduto1;
}

if (preçoDoProduto2 < 3) {
  if (preçoDoProduto2 >= 1.50) {
    console.log("Comprei o produto 2");
    custo = custo += preçoDoProduto2;
  } else {
    console.log("Tem algo errado com o produto 2");
  }
}
console.log("Comprei o produto 3");
custo += custo + preçoDoProduto3;

console.log("Eu paguei", custo, "reais.");