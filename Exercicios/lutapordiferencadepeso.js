function solucao(pesos) {
  var diferenca = Math.abs(pesos[0] - pesos[1]);

  if (diferenca <= 5) {
    return "PODEM LUTAR";
  } else {
    return "NAO PODEM LUTAR";
  }
}
