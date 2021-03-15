/* 12) Faça um algoritmo que calcule o fatorial de um número.
 */

function fatorial(n){
    let novo = n;
for(let i= n; i > 1; i--){
novo = novo*(i-1)
}
 return console.log(novo)
}

fatorial(5)