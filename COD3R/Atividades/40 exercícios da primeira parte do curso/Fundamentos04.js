/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores */


function funcao(dividendo = 10, divisor = 8) {
    return ` O resultado é ${(dividendo/divisor)} e o resto da divisão é ${dividendo%divisor}` 

}
console.log(funcao(10, 2))