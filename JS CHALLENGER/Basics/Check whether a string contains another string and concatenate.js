// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a,b) {
    return a.includes(b) ? b.concat(a): a.concat(b)
 }



 // Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a,b) {
    let c = [];
    if (a.includes(b) == true){
    c =b.concat(a);
    } else { 
    c = a.concat(b);
    }
       return c;
    }