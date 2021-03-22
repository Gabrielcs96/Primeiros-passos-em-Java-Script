function calcularMedia(cod,nota1,nota2,nota3){
    while(cod>0){
    let notas = [];
    notas.push(nota1);
    notas.push(nota2);
    notas.push(nota3);
    notas.sort((a,b) => a < b ? 1 : -1)

        let mediaFinal = ((notas[0] * 4 + notas[1] * 3 + notas[2] *3) / 10)
        if(mediaFinal>5){
            console.log(`${mediaFinal}` )
            return console.log("Aprovado!")
            
        }
        else {
            return console.log("Aluno reprovado")
        }
    } 
    return console.log("Programa encerrado! ")
}
calcularMedia(-41,6,5.4,8)