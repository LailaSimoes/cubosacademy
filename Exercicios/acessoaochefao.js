function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
  // seu codigo aqui
  const possuiItem1 = itensColetados.includes(itemNecessario1);

  const possuiItem2 = itensColetados.includes(itemNecessario2);

  const possuiItem3 = itensColetados.includes(itemNecessario3);

  if (possuiItem1 && possuiItem2 && possuiItem3) {
    return "PODE ENFRENTAR";
  } else {
    return "NAO PODE ENFRENTAR";
  }
}


//itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]

//itemNecessario1 = "machado"

//itemNecessario2 = "espada"

//itemNecessario3 = "sapato"

