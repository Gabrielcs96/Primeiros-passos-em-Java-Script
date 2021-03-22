/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */


function quantosNegativos(arr) {
    let contador = 0;
    arr.map(conteudo => {
        if (conteudo < 0) {
            contador++;
        }
    })
    return console.log(contador)
}

quantosNegativos([1,2,3,4,5,6,7,8,9,0,-1,-2,-3,-4,-5,-6,-7,-8,-9])