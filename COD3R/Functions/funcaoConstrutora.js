function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado ! 
    let velocidadeatual = 0;
    // método público a partir do This ! 
    this.acelerar = function () {
        if (velocidadeatual + delta <= velocidadeMaxima) {
            velocidadeatual += delta;

        } else {
            velocidadeatual = velocidadeMaxima
        }
    }
    // método público ! 
    this.pegaVelocidadeAtual = function () {
        console.log(velocidadeatual)
    }
}

const uno = new Carro

uno.acelerar()
uno.pegaVelocidadeAtual()

const ferrari = new Carro(350, 30)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.pegaVelocidadeAtual()

console.log(typeof uno)
console.log(typeof Carro)
console.log(Carro)
console.log(typeof ferrari)
