/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/


const valorPlano = (idade) =>{
let valortotal = 0
    if(idade<0 ){
        return console.log(`Idade digitada inválida `)
    }

    if(idade<10){
    valortotal = 80;    
    }
    else if(idade <= 30){
    valortotal = 50;
    }
    else if(idade <= 60){
        valortotal = 95;
    }
    else {
        valortotal = 130
    }

    return console.log(`O valor total do plano de saúde para a idade: ${idade} anos é de: ${valortotal + 100}`); 
}
valorPlano(17)