let vet = [10,9,8,7,6,5,4,3,2,1]

// Ordenação Bubble sort 
    function oredena(){
let inicio =0
let fim = vet.length
let temp
let vezes 

for(vezes = 0; vezes <fim; vezes++){ 
    for(pos = inicio; pos <fim - 1 -vezes; pos++){
        if(valores[pos] > valores[pos+1]){
            temp = valores[pos]
            valores[pos] = valores[pos+1]
            valores[pos+1] = temp
        }
    }
}
}