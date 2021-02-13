function contar(){
    var a1 = window.document.getElementById('numero1');
    var a2 = window.document.getElementById('numero2');
    var a3 = window.document.getElementById('numero3');

   var inicio = Number(numero1.value);
   var fim = Number(numero2.value);  
   var passo = Number(numero3.value);  
   var array = []; //Esse array será o responsável por guardar os números que serão impressos na tela

   //Tratando as condições da operação
   if (inicio<0){
       window.alert("Não é possível fazer os passos com números negativos");
       resultadopasso.innerHTML=`Impossível calcular`;
       return;
   } if(inicio>fim){
       window.alert("O número do FIM não pode ser menor que o do início");
       resultadopasso.innerHTML= `É impossível calcular, porque o início não pode ser maior que o fim`; 
   } if(passo<=0 || passo > fim){
       window.alert(" É impossível calcular com um número de passo inferior ou igual a zero  ");
       resultadopasso.innerHTML = `Impossível calcular. Passo inválido.`
       return;
   }
   // Iniciando o FOR para incrementar o " i "
   
   for (var i = inicio; i <= fim; i+=passo) {
    console.log(i);
   // debugger;
    array.push(i);
    resultadopasso.innerHTML = `${array}`;
 }
 
   

}

//quebra de linha na div do resultado
