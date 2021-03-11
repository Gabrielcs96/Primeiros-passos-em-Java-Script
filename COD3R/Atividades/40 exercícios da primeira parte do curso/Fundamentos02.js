/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function ladostriangulo(a=10,b=10,c=10){
    if(a == b && b == c)
    return (console.log(" O triângulo é Equilátero!"))
    if(a == b && b != c)
    return ( console.log( " O triângulo é isóceles"))
    else
    console.log("O triângulo é escaleno")
}
console.log(ladostriangulo())