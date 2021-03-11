const carrinho = [
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.45 }',
    '{"nome": "kit de Lápis", "preco": 41.42 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]


const soValor = carrinho.map(function (item, index) {
    const obj = JSON.parse(item)
    const preco = obj.preco
    return preco
})

console.log("Os preços são: ", soValor)
