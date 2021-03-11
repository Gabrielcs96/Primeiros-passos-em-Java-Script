console.log(Array, typeof Array, typeof new Array, typeof [])


let aprovados = new Array( 'Carol', 'Ana','Joarez');
console.log(aprovados)

aprovadinho = ['Bia', 'Carlitos','laranjada']
console.log(aprovadinho)
aprovadinho[3] = 'Fulano'
aprovadinho.push('Eita Caramba ! ')

console.log(aprovadinho.length)
console.log(aprovadinho)

aprovadinho[7] = 'opa';
console.log(aprovadinho)

aprovadinho.sort()
console.log(aprovadinho)

delete aprovadinho[2]
console.log(aprovadinho)

aprovadinho.splice(1,2, ' Elemento1', 'Elemento2')
console.log(aprovadinho)