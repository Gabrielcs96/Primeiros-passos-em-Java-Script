const sequencia = {
    _valor: 1, // convenção de que essa variável é pretenteida que seja acessada apenas internamente ! 
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) ;// a segunda será maior que a primeira ! 
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900 //aqui, será ignorado devido ao get and set ! 
console.log(sequencia.valor, sequencia.valor);