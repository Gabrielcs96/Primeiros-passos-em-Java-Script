
function pessoa (nome){

 this.dizer =  function() { 
        console.log(`Meu nome é ${nome}`);
    }

}
    

const p1 = new pessoa('Gabriel');
p1.dizer();