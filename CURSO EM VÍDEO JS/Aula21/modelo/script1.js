function verificar()
{
    var data = new Date();
    var ano = data.getFullYear();
    var nascimento = window.document.getElementById('nascimento');
    var resultado = window.document.getElementById('res');
    var img = window.document.getElementById('imagem')
   
   
    if(nascimento.value.length == 0 || Number(nascimento.value) > ano){
        window.alert(' Verifique o ano e tente  novamente'); 
    } else { 
        //window.alert(' Tudo ok ! ');
        var fsex = document.getElementsByName('sex');
        var idade = (ano - Number(nascimento.value));
        //resultado.innerHTML = `Idade calculada ${idade}`;
        var genero = '';
        if(fsex[0].checked){
            genero = 'Homem';
           if(idade> 0 && idade <=10){
            // CRIANÇA
             img.src = 'foto-bebe-m.png';   
        }   else if(idade<21){
            //JOVEM 
            img.src='foto-jovem-m.png';
        } else if(idade <59){
            img.src = 'foto-adulto-m.png';
            //ADULTO

        } else {
            img.src='foto-idoso-m.png'
            //IDOSO
        }

        } else{
            genero = 'Mulher';
            if(idade> 0 && idade <=10){
                img.src = 'foto-bebe-f.png';
                // CRIANÇA
            }   else if(idade<21){
                img.src='foto-jovem-f.png';
                //JOVEM 
            } else if(idade <59){
                //ADULTO
                img.src = 'foto-adulto-f.png';
            } else {
                //IDOSO
                img.src='foto-idoso-f.png';
            }
    
        }
        resultado.innerHTML = `O gênero e idade foram, respectivamente: ${genero} e ${idade}`;  
       }
       
}