function troco(moedas, valor) {
  if (valor * 100 < 1) {
    return ''
  }
  let quantidade = 0;
  let resultado = 0;
  let index = 0;

  while (quantidade === 0) {
    resultado = Math.floor(valor * 100 / moedas[index]);
    if (resultado && !quantidade) {
      quantidade = resultado
    } else {
      index++;
    };
  }

  return `${quantidade} moedas de ${moedas[index]} \n` + troco(moedas, valor  - quantidade)
}

const moedas = [100, 25, 10, 5, 1]

console.log(troco(moedas, 2.89))