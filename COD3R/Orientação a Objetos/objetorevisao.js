const produto = new Object;
produto.nome = 'cadeira'

produto['marca do produto'] = 'Genérica'
produto.preco = 220;

console.log(produto);

delete produto.preco
delete produto.['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario {
        nome: 'Raul',
        idade: 31,
        endereco: {
            logradouro: 'Rua da Laranjada',
            numero: 12
        }
    }
    condutores: [{
        nome: 'Casalbé'
        idade: 23
    }, {
        nome: 'namaria',
        idade: 19
    }],
    calcularSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 10000; 
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'