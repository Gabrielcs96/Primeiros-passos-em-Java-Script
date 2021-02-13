function calcular(){
  var array = [];
  var input = window.document.getElementById('input');
  var a = Number(input.value); 
    for(i=1;i<=10;i++){
        array.push(`<li> ${a} * ${i} = ${a*i}</li>`);
        tabuada.innerHTML = `${array.join('')}`;
    }
}
  /*  for(i= 0; i<10; i++){
        for(j=0;j<10;j++){
            RECEBER O NÚMERO DIGITADO ()
            MULTIPLICAR O NUMERO POR I ; 
        }
    } */
