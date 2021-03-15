/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

const dia = (dia) => {
    
  if(dia>0 && dia<32){
      
    switch (dia%7) {
        case (0):
            console.log("Final de semana ! ");
            break;
        case (1):
            console.log("Final de semana ! ");
            break;
        default:
            console.log("Dia de trabalhar, vagabundo")
    }
  }
  else{
      return console.log("Dia inválido digitado")
  }
}

for(let i = 0; i<32;i++){
    console.log('Dia ' + i )
    dia(i);
}