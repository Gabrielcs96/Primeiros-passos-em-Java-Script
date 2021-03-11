// o filter serve para filtrar um array, de modo a que a gente consiga "filtrar" o array em coisas que voc~e quer ! 

const produtos = [
    { nome: 'Notebook', preco:2499, fragil: true},
    { nome: 'iPad ', preco: 4500, fragil: true},
    { nome: 'copo de Vidro', preco: 12.2, fragil: true},
    { nome: 'Copo de plástico', preco: 4.99, fragil: false}

]


const fragilidade = function(){
    console.log(produtos.filter(function(p){
        return p.fragil == true; 
    }))
}

const caro = function(){
    console.log(produtos.filter(function(p){
        return p.preco > 500;
    }))
}


console.log(caro())
console.log(fragilidade())