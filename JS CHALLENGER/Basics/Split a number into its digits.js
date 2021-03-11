
// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(a){
    let value = a.toString();
    let arr = Array.from(value); 
    let fim = [];
    for (let i = 0; i< arr.length; i++){
        fim[i] = parseInt(value[i])
    }
    return fim; 
}