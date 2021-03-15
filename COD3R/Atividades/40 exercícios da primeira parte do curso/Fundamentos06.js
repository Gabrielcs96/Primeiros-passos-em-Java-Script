/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const taxadeJuros = (ci = 10000, tj = 0.5, ta = 12) => {
    let montantesimples = ci * (1 + tj * ta)
    montantesimples.toFixed(2).toString().replace(".", ",")
    console.log(`O valor dos Juros simples, ao longo do tempo estipulado é de: ${montantesimples}`)

}

const taxadeJurosCompostos = (c = 1000, i = 0.5, t = 12) => {
    let montantecomposto = c * (1 + i) ** t
    console.log(`O valor das compostas é: R$${montantecomposto}`)
}

taxadeJuros(4000, 2.5, 18)

taxadeJurosCompostos()