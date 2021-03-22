/* 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
 */

const PA = (n, a1, r) => {
    
    let valor = a1;
    
    for (let i = 1; i <= n; i++) {
        console.log(valor+=r)
        
    }
return valor;

}


const PG = (n, a1, r) => {
 let resultado = a1
 for(let i = 1; i<=n;i++){
    console.log((resultado=resultado*r**n-1))
}

}

//PA(5,1,2)

PG(5,1,2)