class pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
        console.log(`Meu nome é ${pessoa.nome}`);
    }
}

const pessoa01 = new pessoa('Juarez')
pessoa01.falar()

const criarpessoa = nome => {
    return { 
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarpessoa('Casalbé')
p2.falar()
