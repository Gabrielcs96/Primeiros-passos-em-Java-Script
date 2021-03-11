Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad ', preco: 4500, fragil: true },
    { nome: 'copo de Vidro', preco: 12.2, fragil: true },
    { nome: 'Copo de plástico', preco: 4.99, fragil: false }

]


const caro = produto => produto.preco >500
const fragil = produto => produto.fragil == true 

console.log(produtos.filter2(caro))
console.log(produtos.filter2(fragil))