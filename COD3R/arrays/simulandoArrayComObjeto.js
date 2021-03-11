const quaseArray = { 0: 'Rafa', 1: 'Jacaré', 2: 'Jambo'}

console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', { 
 value: function(){ return Object.values(this)},
 enumerable: false   
})

console.log(quaseArray)

const meuArr = [ 'Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArr)