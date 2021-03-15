/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */


const calculadora = (str,n1,n2) => {
    switch (str) {
        case '+':
            console.log(`O Número ${n1} somado ao Número ${n2} é igual a ${n1+n2}`);
            break;
        case '-':
            console.log(`O Número ${n1} subtraído de Número ${n2} é igual a ${n1-n2}`);
            break;
        case '*':
            console.log(`O Número ${n1} multiplicado pelo Número ${n2} é igual a ${n1*n2}`);
            break;
        case '/':
                console.log(`O Número ${n1} dividido pelo Número ${n2} é igual a ${n1/n2}`);
                break;    
        default:
            console.log("A operação digitada não é válida.")
}
}

calculadora('/',5,5)