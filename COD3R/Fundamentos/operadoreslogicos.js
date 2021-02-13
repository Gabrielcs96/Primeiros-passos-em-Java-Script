// xor - OU exclusivo ---- obrigatoriamente diferentes ! 
// ' ! ' negação lógica 

function compras ( trabalho1, trabalho2) {
    const compraSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    //const comprarTV32 =  !!(trabalho1^ trabalho2);
    const comprarTV32= trabalho1 != trabalho2;
    const manterSaudavel  = !compraSorvete;
    return { compraSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true, false));

