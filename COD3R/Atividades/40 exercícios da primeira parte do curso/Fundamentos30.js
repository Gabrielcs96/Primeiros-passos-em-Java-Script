// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. 

function menoremaiorvalor(arr){
    let maior = arr[0];
    let menor = arr[0];

    for (let i = 0; i< arr.length; i++){
        if(maior<arr[i]) {
            maior = arr[i];
        }
        if(menor>arr[i]) {
            maior = arr[i];
        }
    }
return console.log(" O maior número do array é o : " + maior + " E o menor número no array é o " + menor)
}
menoremaiorvalor([1,2,3,4,5,6,7,8,9,10])