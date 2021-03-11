// É uma função que serve para você transformar um array num único elemento ou num número ou numa string , o resultado de um reduce é sempre passado para uma próxima string
const alunos = [ 
    {nome: 'João ', nota: 7.4, bolsista: false},
    {nome: 'Cristovão', nota: 9.1, bolsista:true},
    {nome: 'Sarinha', nota:10, bolsista:false},
    {nome: 'Keila', nota: 5.4, bolsista:false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador+ atual
},0) // esse 10 no final será somado no início! 

console.log(resultado)