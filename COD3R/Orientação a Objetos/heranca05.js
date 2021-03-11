console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')

}

console.log('Escola Cod3r'.reverse())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) // efeitos colaterais por conta da modificação de comportamentos de natureza global ! 