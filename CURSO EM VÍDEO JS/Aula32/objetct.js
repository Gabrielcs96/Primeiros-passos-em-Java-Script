let amigo = {nome:'José',
sexo:'M',
peso:'75,4',
engordar(p=0){
    console.log('Ganhou peso ');
    this.peso +=p;
}}
amigo.engordar(2);
console.log(`${amigo.nome} pesa ${ amigo.peso}kg`);
