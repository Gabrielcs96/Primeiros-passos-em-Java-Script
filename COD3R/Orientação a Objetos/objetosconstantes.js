// objetosconstantes.js

//pessoa -> 123 -> { alguma coisa }
const pessoa = {
    nome: 'Joao'
}
console.log(pessoa.nome);

pessoa.nome = 'Laranjada'

console.log(pessoa.nome);

// ERRADÍSSIMO  = pessoa = {nome: 'Ana'} , AÍ EU ESTARIA MUDANDO A CONSTANTE " PESSOA " e não o RESULTADO dessa constante ! 

Object.freeze(pessoa); // CONGELANDO OBJETO ! 


pessoa.nome = 'Maria'
delete pessoa.nome; 
console.log(pessoa.nome)