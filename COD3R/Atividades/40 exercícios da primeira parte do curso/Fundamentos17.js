const calculaAumento = (str,salario) => {
   let res =  str.toUpperCase();

    switch (res) {
        case 'A':
            console.log(`O plano A dá um aumento de 10%, logo: ${salario}* 10%, logo = ${salario = salario*0.1 + salario}`);
            break;
        case 'B':
            console.log(`O plano B dá um aumento de 15%, logo: ${salario}* 15%, logo = ${salario = salario*0.15 + salario}`);
            break;
        case 'C':
            console.log(`O plano C dá um aumento de 20%, logo: ${salario}* 20%, logo = ${salario = salario*0.2 + salario}`);
            break;
            
        default:
            console.log("O plano digitado é inválido")
}
}

calculaAumento('c',1000)