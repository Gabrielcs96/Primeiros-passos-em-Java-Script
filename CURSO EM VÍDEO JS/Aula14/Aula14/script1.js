function carregar()
{
var mensagem = window.document.getElementById('mensagem');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
var minutos = data.getMinutes()
mensagem.innerHTML=`Agora são: ${hora}:${minutos} ! `;

if(hora>0 && hora<=12){
//MENSAGEM DE BOM DIA !
window.document.body.style.background = '#9acd32';
img.src = 'imagemmanha.png';   
  
} else{
    if(hora>12 && hora<18){
//MENSAGEM DE BOA TARDE
window.document.body.style.background = 'd2691e';
img.src = 'imagemtarde.png';
         
    } else{
    window.document.body.style.background = '2f4f4f';
    img.src = 'imagemnoite.png';        
        //MENSAGEM DE BOA NOITE 
    }
    
}

}

