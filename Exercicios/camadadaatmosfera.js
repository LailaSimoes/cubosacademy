function solucao(altitude) {

  let TROPOSFERA = 20
  let ESTRATOSFERA = 50;
  let MESOSFERA = 80;
  let TERMOSFERA = 450;
  let EXOSFERA = 900;


  if (altitude <= 20) {
    return (TROPOSFERA)
  } else if (altitude <= 50) {
    return (ESTRATOSFERA)
  } else if (altitude <= 80) {
    return (MESOSFERA)
  } else if (altitude <= 450) {
    return (TERMOSFERA)
  } else if (altitude <= 900) {
    return (EXOSFERA)
  }
}

