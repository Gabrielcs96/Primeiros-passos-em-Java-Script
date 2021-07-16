const pessoa = {
    nome:"fulano",
    idade:"45",
    cidade:"Salvador"
}

// Notação de nomes 
console.log(pessoa.nome)

// Notação de Colchetes 
console.log(pessoa['idade'])

// Notação de desestructuring ( desestruturar o objeto )

const {nome, idade, cidade} = pessoa

console.log(nome,idade,cidade)


const filmes =[
    {
        id:1,
        titulo: "Dilema das redes",
        descricao:" O filme trata de história sobre a rede de internet ",
        duracao:120
    },
    {
        id:2,
        titulo: "The magic Pill",
        descricao:" O filme trata de história sobre dieta ",
        duracao:210

    },
    
    {   
        id:3,
        titulo: "Real Steel ",
        descricao:" O melhor filme de todos  ",
        duracao: 150

    }
]


const [{titulo, descricao, duracao, id}] = filmes
 
console.log(titulo)

filmes.map(filmes => console.log(filmes.descricao, filmes.duracao))