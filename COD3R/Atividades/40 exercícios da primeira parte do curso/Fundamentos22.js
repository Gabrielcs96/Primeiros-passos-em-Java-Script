function anuidade(mes, valor) {

    if (mes > 12 || mes < 0) {
        return console.log("Mês digitado inválido ")
    }
    switch (mes) {

        case 1:
            valor = valor;
            break;
        case 2:
            valor = valor * ((1 + 0.05) ** mes);
            break;
        case 3:
            valor = valor * ((1 + 0.05) ** mes)
            break;
        case 4:
            valor = valor * ((1 + 0.05) ** mes)
            break;
        case 5:
            valor = valor * ((1 + 0.05) ** mes)
            break;
        case 6:
            valor = valor * ((1 + 0.05) ** mes)
            break;
        case 7:
            valor = valor * ((1 + 0.05) ** mes)
            break;
        case 8:
            valor = valor * ((1 + 0.05) ** mes)
            break;
        case 9:
            valor = valor * ((1 + 0.05) ** mes)
            break;
        case 10:
            valor = valor * ((1 + 0.05) ** mes)
            break;
        case 11:
            valor = valor * ((1 + 0.05) ** mes)
            break;
        case 12:
            valor = valor * ((1 + 0.05) ** mes)
            break;


    }
    return console.log(`Baseado no mês informado, o valor total, com o juros é de aproximadamente R$${valor}`);
}

anuidade(9, 100)