// O objetivo da Herança é criar mecanismos para o reuso de código naõ ser baseado em ctrl c + ctrl V 
// Uma pessoa, um  objeto pode ser utilizado como classe " Pai "!
// Você consegue reutilizar bastante coisa do código de um dado objeto ! 


const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);