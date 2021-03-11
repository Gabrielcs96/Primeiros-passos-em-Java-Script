const fabricantes = ["Land Rover", "Audi", "VolksWagen",01]

function imprimir(nome, indice){
console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante));

imprimir(fabricantes)
