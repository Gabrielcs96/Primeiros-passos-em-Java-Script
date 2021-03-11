// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

function myFunction(a) {
 for(let i = 2; i <= a; i++) {
   if(a%i == 0) {
     if(a == i){
       return a;
   } else {
      a++;
      i=2;
      }
    }
  } 
}
