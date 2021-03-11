// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction(str) {
    let vet =[];
    let novo =[]; 
  for (let i = 0; i<str.length;i++){
   console.log(str[i])
    vet[i] = str.charCodeAt([i])
    console.log(vet[i]);
    vet[i] = vet[i]+1;
    novo[i] = String.fromCharCode(vet[i])
  } 
    // console.log(novo.join(''))
     return novo.join('');
    
  }