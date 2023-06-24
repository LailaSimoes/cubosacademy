let numero = 5436;
let texto = "Oi";
let vazio;

let verdade = numero > 100;//true
let falso = numero < 10; //false

console.log("Numero:", numero);
console.log("Texto:", texto);
console.log("Verdadeiro:", verdade);
console.log("Falso:", falso);
console.log("Vazio:", vazio);

//Podemos checar e perguntar para o código dessa forma usando o 'typeof':
console.log("Numero:", typeof numero);
console.log("Texto:", typeof texto);
console.log("Verdadeiro:", typeof verdade);
console.log("Falso:", typeof falso);
console.log("Vazio:", typeof vazio);

//Valores booleanos:
console.log("É maior?", numero > 5436);//retorna false, pois perguntamos se o valor é maior!
console.log("É maior ou igual?", numero >= 5436);//retorna true pois o valor é igual!
console.log("É maior ou igual?", numero >= 5);//retorna true pois o valor é maior que 5!
console.log("É menor?", numero < 10000);//retorna true pois o valor é menor que 10000!
console.log("É maior?", numero > 10000);//retorna false pois o valor é menor que 10000!

//Podemos usar com String's:
console.log("É igual?", texto === "Oi");
//Checamos com esse operador "!==" se a diferença entre valores:
console.log("Esse texto é diferente?", texto !== "Olá");