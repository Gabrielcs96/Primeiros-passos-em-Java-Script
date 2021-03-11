const notas = [8.3, 3.2, 2, 9.2, 4.5, 5.2]

// sem callback
let notasbaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas.push(notas[i])
    }
}


console.log(notasbaixas)

// COm callback 
let notasbaixas2 = notas.filter(function(nota) { 
    return nota< 7
})

console.log(notasbaixas2)

let notasbaixas3 = notas.filter(nota => nota<7)

console.log(notasbaixas3)