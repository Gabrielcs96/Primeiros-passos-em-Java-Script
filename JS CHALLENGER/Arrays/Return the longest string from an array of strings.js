// Write a function that takes an array of strings as argument
// It should return the longest string

function myFunction(arr) {
 
    let bigger = arr[0];
     arr.map(string => { 
      if(string.length > bigger.length) bigger = string})
   return bigger
   }