// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr) {
    let f = 0 
    let t = 0
    arr.map((a) => {
      if (a !== arr[0]) {
        f++
      } 
      t++; 
  })
    if (f>0){
      return false;
    }
    return true
  }
  