function criarPessoas(){
    return { 
        nome: 'Laranjada',
        sobrenome: 'Carambelo',
        idade:  32    }
}

console.log(criarPessoas())


function criarProduto(nome,preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Desktop', 5460.43))
console.log(criarProduto('Complexo', 134, 5.2))
