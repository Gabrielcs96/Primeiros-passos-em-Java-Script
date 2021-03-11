// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

function myFunction(letra,str){
    let pat = new RegExp(letra, "g");
    let patb = new RegExp(letra.toUpperCase(), "g");
    let posa = str.match(pat);
    let posb = str.match(patb);
    let posc = posa.length + posb.length;
       return posc; 
    }

    myFunction('A', "A hora da laranjada");