// exercício de desestruturação com  rrays

const [a] =[10];

console.log(a);

const [n1, , n3, , n5, n6=0] = [10,7,9,8];
console.log(n1,n3,n5,n6)

//DESESTRUTURAÇÃO ANINHADA 

const [, [, nota]] = [[, 8,8], [9,6,8]]; // Pegando o segundo elemento do segundo arrai que está dentro de um array 
console.log(nota);