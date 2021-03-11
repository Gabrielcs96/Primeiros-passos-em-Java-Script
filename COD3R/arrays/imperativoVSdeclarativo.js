const alunos = [ 
    {nome: 'João ', nota: 7.4, bolsista: false},
    {nome: 'Cristovão', nota: 9.1, bolsista:true},
    {nome: 'Sarinha', nota:10, bolsista:false},
    {nome: 'Keila', nota: 5.4, bolsista:false}
]

//impertativo ! 
let total1 = 0;
for(var i=0; i< alunos.length; i++){
total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//declarativo 
const getNota = alunos =>alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length) 