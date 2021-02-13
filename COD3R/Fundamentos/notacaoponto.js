console.log(typeof console);
console.log(Math.ceil(6.1));

const obj1 = {}
obj1['nome'] = 'Bola2';
obj1.nome = 'Bola'


console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome; // Vc está dizendo que está recebendo o atributo nome e atribuindo ao nome ; 
}

const obj2 = new Obj('cadeira');
