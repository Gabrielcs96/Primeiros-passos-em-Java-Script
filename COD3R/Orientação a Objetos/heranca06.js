function Aula(nome, videoId){
    this.nome = nome; 
    this.videoId = videoId;
}

const aula1 = new Aula( 'Bem vindo', 1234)
const aula2 = new Aula ( ' Até logo', 54321)

console.log(aula1,aula2, Aula)

// simulando o " new"

function novo (f, ...params){
    const obj = {}
    obj.__proto__ = f.protype
    f.apply(obj, params)
    return obj
}

// dando sequência ao exemplo ! 

const aula3 = novo(Aula, 'Bem Vindo ', 1234)
const aula4 = novo(Aula, 'Bem vindo' , 456)