const arr = ['Lira', 'Aldo', 'Daniel', 'Jaqueline']

arr.forEach(function(nome, indice){ 
    console.log(`${indice + 1}) ${nome}`)
})

arr.forEach(nome => console.log(nome))

const exibirAprovados = arr => console.log(arr)
arr.forEach(exibirAprovados)