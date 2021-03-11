const valor = 'Alguma coisa'
function myFunction(){
    console.log(valor)

}

function exec() {
    const valor = 'valor local' 
    myFunction()
}


exec()

// Clousure é o escopo criado quando uma função é declarada !  !! Esse escopo permite a função acessar e manipular variáveis externas a função ! 
//Isso é uma questão de contexto léxico ! 
