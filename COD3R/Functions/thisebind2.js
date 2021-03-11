function pessoa() {
    this.idade = 0;

    setInterval(function () {
        this.idade++;
        console.log(this.idade)
        console.log('nada');
    }.bind(this), 1000)
}

const teste = new pessoa() 