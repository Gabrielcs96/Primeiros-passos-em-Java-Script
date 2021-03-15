const toMoney = (a = 0.656565) => {
 let dinheiro = a.toFixed(2).toString().replace(".", ",")

    return console.log(`O valor digitado, no formato de real é R$${dinheiro}`)
}

toMoney(0.2345)