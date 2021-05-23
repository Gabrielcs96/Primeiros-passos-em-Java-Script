let results = ''
let v1 = '0' //1
let v2 = '0'
let opt ='' // +
const resultado = document.getElementById('resultado')

function addNumber(number) {

    resultado.innerHTML = results += number;
 //   console.log("Adicionando Números")
}

function addOperation(operation) {
    


    if(v2 == '0'){
        if(v1 == '0'){
            v1 = results
            clearAll()
        }
        else {
            v2 = results
            clearAll()
        }
    }

    if(opt == ''){
        opt = operation
    }
    else{
    
      switch(opt){
        case '+':
            const soma = Number(v1)+Number(v2)
            
            resultado.innerHTML = soma.toString()
            v1 = soma.toString()
            v2 = '0'
            opt = operation

            console.log("v1",v1)
            console.log("v2",v2)
            console.log("opt",opt)
            console.log("operation",operation)

        case '-':
            const subtracao = Number(v1)-Number(v2)
            resultado.innerHTML = subtracao.toString()
            v1 = subtracao.toString()
            v2 = '0'
            opt = operation  
            console.log()
            console.log("v1",v1)
            console.log("v2",v2)
            console.log("opt",opt)
            console.log("operation",operation)

            case '*':
                const multiplicacao = Number(v1)*Number(v2)
                resultado.innerHTML = multiplicacao.toString()
                v1 = multiplicacao.toString()
                v2 = '0'
                opt = operation  
            
            case '/':
                const divisao = Number(v1)/Number(v2)
                resultado.innerHTML = divisao.toString()
                v1 = divisao.toString()
                v2 = '0'
                opt = operation  

            
      }  
    }

  /*switch (operation) {

        case '+':
            v2 = results
            return console.log(v2)
            
            console.log("Somando !")
            break;
        case '-':
            console.log("subtraindo")
            break;
        case '*':
            console.log("Multiplicando")
            break;
        case '/':
            console.log("divindo")
            break;
  } 
  */       

     
   
}

function equals() {
  //  console.log("Resultado do igual ")
}

function erase() {

    if (results.length > 0) {

        let resultado = document.getElementById('resultado')
        let valor = results.substring(0, results.length - 1)
        resultado.innerHTML = valor
        results = valor
      //  console.log(resultado, valor)
    }

    else {
        return null
    }

    console.log("Apagando")
}

function clearAll() {
    results = ''
    resultado.innerHTML = results
}

function reset(){
 results = ''
 v1 = '0' //1
 v2 = '0'
 opt =''
 resultado.innerHTML = ''
 
}