// Desestruturação ES2015

const pessoa = {
    nome: 'Ana',
    idade:5,
    endereco: { 
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade } = pessoa // Você está dizendo que é para tirar o "nome e idade" de dentro do objeto! 
console.log(nome,idade);


const { nome: n , idade: i} = pessoa // Modificando o nome das variáveis do JS 
console.log(n , i);

const { sobrenome, bemHumorada = true} = pessoa; // passei o valor padrão de bem humorada e passei o " sobrenome " que não exitiam dentro do objeto 

console.log(sobrenome, bemHumorada); 

const { endereco: { logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);

// const { conta: { ag, num}} = pessoa; sempre deve-se desestruturar um dado de forma coerente e correta ! 



