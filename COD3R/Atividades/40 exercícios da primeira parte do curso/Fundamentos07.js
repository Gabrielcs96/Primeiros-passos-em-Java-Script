/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

function formuladebhaskara(a, b, c) {

    let delta = (b ** 2) - (4 * a * c)
    let resultados = [1]
    if (delta < 0) {
        return console.log("O valor de delta é negativo, portanto é impossível calcular")
    }
    let x1 = (-b + Math.sqrt(delta))/ 2 * a
    let x2 = (-b - Math.sqrt(delta))/ 2 * a

    resultados[0] = x1;
    resultados[1] = x2;

    return console.log(resultados)

}

formuladebhaskara(1, 3, -10)