const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop();// Remove o último elemento do Array!  
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift() // Esse remove o primeiro

console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // Adicionar no meio do Array , porque eu pus ' 0 ', então, ele não vai remover e o ' 2 ' ali é para avisar ao método que será na segunda posição! 

console.log(pilotos)

pilotos.splice(4, 1) // o carro do Raikkonen quebrou, então... 
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array com um pedaço do primeiro array a partir da posição 2 
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,3) // Uma parte do array da posição 01 até a 02 ( isso mesmo, a 3 - 1 )será jogaedo no novo array algunsPilotos2 
console.log(algunsPilotos2)
