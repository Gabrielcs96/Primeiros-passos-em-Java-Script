let dobro = function (a){ // Usando a função com certa " normalidade "
    return 2*a ; 
} 

dobro = (a) => { // Usando a Arrowfunction pela primeira vez, no seu escopo " comum"
    return 2*a;
}

dobro = a => 2*a;  // Funções de uma única linha , com apenas "uma única" instrução
console.log(dobro(Math.PI));



let ola = function(){
    return 'Olá'

}

ola = () => {
    return 'olá'
}

ola = () => 'olá'

olá =() => 'Olá'


console.log(ola());
