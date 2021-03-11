// É uma função que serve para você transformar um array num único elemento ou num número ou numa string , o resultado de um reduce é sempre passado para uma próxima string
const alunos = [ 
    {nome: 'João ', nota: 7.4, bolsista: false},
    {nome: 'Cristovão', nota: 9.1, bolsista:true},
    {nome: 'Sarinha', nota:10, bolsista:false},
    {nome: 'Keila', nota: 5.4, bolsista:false}
]


// Desafio 01: todos os alunos são bolsistas ? usando o Reduce ! 
const todosBolsistas = (resultado,bolsista) => resultado && bolsista 
console.log(alunos.map(a=> a.bolsista).reduce(todosBolsistas))

// Desafio 02:  Algum aluno é bolsista ? 
const algumBolsista = (resultado,bolsista) => resultado || bolsista == true 
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))