const pessoa ={
    saudacao: 'Bom Dia ',
falar() { 
    console.log(pessoa.saudacao) // this.saudacao poderia ser utilizado também ! 
}
}

pessoa.falar();

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa();
