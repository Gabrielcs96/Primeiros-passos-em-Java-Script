let valores = [1, 2, 3, 5, 7, 8, 9, 11, 12, 28, 45, 65, 75];
function busca(num) {
  for (i = 0; i < 6; i++) {
    if (num == valores[i]) {
      return i;
    } else {
      return -1;
    }
  }
}

// Buscando o valor
console.log(busca(75));

// Busca binária
function buscabin(num) {
  let inicio, fim;
  let meio;
  inicio = 0;
  fim = valores.length;
  while (inicio <= fim) {
    meio = parseInt(inicio + fim) / 2;

    if (num == valores[meio]) {
      return meio;
    } else {
      if (num > valores[meio]) {
        inicio = meio + 1;
      }
      else{
          fim = meio-1
      }
    }
  }
  return -1
}
