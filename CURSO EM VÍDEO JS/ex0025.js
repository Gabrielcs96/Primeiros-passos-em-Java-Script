let num =[4,5,7,798,985,4,1,4,75,3,6,8,4]
num.push(4);
num.sort();
console.log (`Nosso vetor é o ${num}`)



for (var pos in num){
    console.log(num[pos]);
}
console.log(` O valor 985 está na posição: ${num.indexOf(985)}`);