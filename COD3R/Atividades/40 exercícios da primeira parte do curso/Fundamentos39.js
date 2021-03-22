/* 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */ 

function substituir (a,b){
    if( a.length == b.length){
    for(let i = 0; i< b.length; i++ ){
           a.push(b[i]);
        }   
        console.log(" O testa do  A: ", a  )
      b = a.splice(0,b.length)
    console.log(a);
    console.log(b);
}
    
else { 
    return console.log(" Os vetores aqui apresentados precisam ter a mesma dimensão ! ")
}

}

substituir([1,2,3],['a','b','c','d'])