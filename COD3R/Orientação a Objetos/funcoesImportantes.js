const pessoa = {
    nome: 'Raíssa',
    idade: 11, 
    peso: 13
}

console.log(Object.keys(pessoa)) // Aqui eu pego todas chaves do objeto ! 
console.log(Object.values(pessoa)) // Todos os valores de dentro do objeto ! 
console.log(Object.entries(pessoa)) // Pega o par chave/valor do Objeto 


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// Object.assign() Função repsonsável por fazer a concatenação de objetos !

const dest = {a:1}
const o1 = {b:2}
const o3 = {c:3, a:4 }
const obj = Object.assign(dest, o1, o3);


console.log(Object.entries(dest))

Object.freeze(obj) // funçaõ para congelar o objeto, impedindo que seja cancelável/modificável 