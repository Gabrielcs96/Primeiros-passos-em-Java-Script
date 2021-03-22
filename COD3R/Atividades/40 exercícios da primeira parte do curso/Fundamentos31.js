// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const mediaVetor = (arr) => {
    let soma = 0; 
   for(let i = 0; i<arr.length; i++){
       soma += arr[i];
   }
   return console.log(soma/arr.length)
}

mediaVetor([1,2,3,4,5,6,7,8,9,10])