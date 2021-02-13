var array = [];

function adicionar(){ 
    var input = window.document.getElementById('input');
    var num = Number(input.value);
    let tab = document.getElementById('valores');
if (num <0 || num >100){
    window.alert("Valores incoerentes com o que está sendo solicitado ");

}
else{
array.push(num);
//console.log(array);
   
    let item = document.createElement('option');
    item.text =  ` Valor  ${num} adicionado ! `
    console.log(num);
    tab.appendChild(item);
}  
}

function finalizar(){
var p1 = window.document.getElementById('p1');
 p1.innerHTML = `Ao todo temos: ${array.length}  números cadastrados`; 
 
 var p2 = window.document.getElementById('p2');
 p2.innerHTML = ` O maior valor encontrado aqui foi: ${Math.max.apply(null,array)}`;      

 var p3 = window.document.getElementById('p3');N
 p3.innerHTML = ` O menor valor encontrado aqui foi: ${ Math.min.apply(null,array)};` 

var p4 = window.document.getElementById('p4');
var soma = 0; 
for (var x=0; x < array.length; x++) {

    soma = soma + array[x];
    console.log(typeof(array[x]));
    console.log(soma);
   }
p4.innerHTML = `A soma de todos os valores é igual a: ${soma}`;

var p5 = window.document.getElementById('p5');
var calc = 0;
calc = (soma/array.length);
p5.innerHTML = `A média dos valores digitados é: ${calc}`
}
