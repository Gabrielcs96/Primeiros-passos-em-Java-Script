const isDivisible43 = numero => {
    if(!Number.isInteger(numero)){ 
     console.log(" Valor digitado não é inteiro")   
    }

    else if(numero%3 == 0){
        return console.log(true);
    }
    else{
        return console.log(false); 
    }
}



isDivisible43(6)