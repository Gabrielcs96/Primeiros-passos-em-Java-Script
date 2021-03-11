// cadeia de protótpios ( prototype chain)
Object.prototype.atributo0 = '0'
const avo = { atributo1: 'A' }
const pai = { __proto__: avo, atributo2: 'B' }
const filho = { __proto__: pai, atributo3: 'C' }

console.log(filho.atributo1)// buscando atributos de heranças !
console.log(filho.atributo0)//interessante ! 
console.log(filho.atributo0, filho.atributo1, filho.atributo0, filho.atributo3)

const carro = {
    valAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
        status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing ! 
}

const volvo = {
    modelo: "v40",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari)

volvo.acelerarMais(150)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())