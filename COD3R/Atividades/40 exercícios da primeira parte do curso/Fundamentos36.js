/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/ 

function myFunction1(arr, n) {
    let novoArr = []

    arr.map((valor) => {
        novoArr.push(valor * n)
    })
    //console.log(novoArr);
    return novoArr

}

function myFunction2(arr, n) {
    let novoArr2 = []
    arr.map((valor) => {
        if (valor > 5) {
            novoArr2.push(valor * n)
        }

    })
    console.log(novoArr2)
}


myFunction2(myFunction1([2, 3, 4, 5], 5), 5)