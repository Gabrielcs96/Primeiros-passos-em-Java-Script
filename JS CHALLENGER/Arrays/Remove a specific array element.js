// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version
function myFunction(arr,a) {
 
    for(let i = 0; i<arr.length; i++){
    if(arr[i] === a){
      arr.splice(arr.indexOf(a),1)
                    } 
    }
    console.log(arr)
   
     return arr;
  }