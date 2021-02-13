/*function fullName(){
  const person = {
    nome : 'Gabriel',
    sobrenome: 'Santos'
  }
  document.getElementById("demo").innerHTML = (`${person.nome}  ${person.sobrenome} `);

  }

fullName();
*/
const person = {
  nome: "Gabriel",
  sobrenome: "Santos" ,
  endereco: "Rua José Alves de Almeida",
  funcao: function(){
    console.log('testando  a função', person.nome)
    document.getElementById("demo").innerHTML = person.nome
      
  }
}


person.funcao()