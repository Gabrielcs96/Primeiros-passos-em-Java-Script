/* Tipos de dados 
Vocabulários também 
Saber escrever
sabaer os significados 
continuar aprendendo... Sempre ! */

// Vamos aprender 


// String 
/*""" Aspas dulplas" 
'' aspas simples 
`` template literals ou template strings - multilinhas e expressões de linguagem , com interpolação e tal ++++++++++++*/

/*
NUMBER 
INTEIROS 
REAIS ( FLOAT )
NaN ( not a Number 
    Infinity ( infinito ) 
    */

/*BOOLEAN 
 
SOMENTE DOIS VALORES 
VERDADEIRO OU FALSO ++++++
 
 
 
 
 
 
 
Undefined é diferente de null ! 
null é quando o objeto não possui nada dentro 
 
Undefined é quando não é definível o conteúdo 
 
 
 
 
 
 
 
 
*OBJECT* 
Objetos possuem propripedades e atributos 
Funcionalidades/ métodos 
{ propriedade: "Valor" ! 


Variáveis 
-  São nomes simbólicos para receber algum valor 
atalhos de código 
identificadores 
3 palavras var 
let 
const 


Linguagem fracamente tipada 

case sensitive 
caracteres especiais 
acentos 
lentras maiúsculas e minúsculas 

não pode iniciar com números ou por espaços vazios no nome 

o Ideal = Criar nomes que fazem sentidos 
que expliquem o que a variável faz 
camelCase
snake_case
Escrever em inglês é lgal ! 











const person = {
    name: 'john,
    age: 30, 
    weight: 88.6,
    isAdmin: true
}

    ARRAYS ! 
    const animals = [
        'lion', 'cat', 'monkey'
    ]
    usar neste caso o índice ! 

 


*/

// 1 - declare uma variável com o nome wheght
let weight

// 2 - que tipo de dado é a variável acima 

console.log(typeof weight)

// 3- Daclare uma variável e atribua valres para cada um dos dados 
// *name: String 
// *age : number ( integer)
// Stars : Number ( float )
// isSubscribed: Boolean

const person = {
    name: 'Juciclei',
    age: 32,
    stars: 12.4,
    isSubscribed: true
}

/*
A variável student abaixo é de que tipo de dado ? (JÁ SEI QUE É OBJETO ) 
Atribua a ela as mesmas propriedades e valores do ex 03 ( JÁ FIZ ACIMA ) 
Faça o console que mostre a seguinte mensagem: <name> de idade <age> pesa <weight>
*/
console.log(`${person.name} de idade ${person.age} pesa algum peso kg`)

/* Declare uma variável do tipo array de nome students e não coloque nada dentro dela */

let students = []


/* Reatribua valores para variáveis acima sem copiar e colar, pegue o o objeto criado anteriormente e jogue dentro dela !  */

students[0] = person

console.log(students[0])

// Crie um novo objeto e jogue na posição 1! 

const person2 = {
    name: 'Jucicljandir',
    age: 32,
    stars: 12.4,
    isSubscribed: true
}
students[1] = person2
console.log(students)
