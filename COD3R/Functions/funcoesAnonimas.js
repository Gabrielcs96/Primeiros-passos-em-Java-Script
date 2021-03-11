const soma = function(x,y) { // Funções anônimas, são funções sem nome !  
 
        return x+y;

}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResultado(3,4);
imprimirResultado(4,5,soma);
imprimirResultado(6,8, function(x,y){
    return x - y;
})

imprimirResultado(3,5, (x,y) => x*y )



const pessoa = {
    falar: function() {
        console.log('Eita') },
    
   dizer: function() {
        console.log('Opa !')
    }

}

pessoa.falar()


console.log(console.log(console.log('laranjada'))) // Sempre que você usar um console log dentro de um console log haverá um " undefined " no final 