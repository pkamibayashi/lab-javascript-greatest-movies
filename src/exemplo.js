// function vitamina(fruta, liquido) {
//   return `Aqui esta sua vitamina de ${fruta} com ${liquido}`;
// }

// FRUTAS
const frutaMorango = "morango";
const frutaAbacaxi = "Abacaxi";

function suco(fruta, liquido) {
  return `suco de ${fruta} com ${liquido}`;
}

function liquidificador(fruta) {
  return `Suco de ${fruta}`;
}

console.log(liquidificador(suco(frutaMorango, "leite")));
