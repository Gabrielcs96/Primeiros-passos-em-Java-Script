function soma() {
    let soma = 0
    for (i in arguments) {
        soma = soma + arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1, 2, 3, 4, 6));
console.log(1, 3, 4, 5, "teste");
console.log('a', 'b', 'c',);

