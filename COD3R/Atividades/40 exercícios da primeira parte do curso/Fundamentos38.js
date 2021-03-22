/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

const impares = (n1=0, n2=100) => {
    let min = n1;
    let max = n2;
    if (n1 > n2) {
        max = n1;
        min = n2;
    }
    let arr = [];
    for (i = min; i <= max; i++) {
        if (i % 2 === 1) {
            arr.push(i);
        }

    }
    return console.log(arr)
}

impares(0,100)