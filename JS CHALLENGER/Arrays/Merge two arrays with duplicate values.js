// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array



function myFunction(arrA,arrB) {
    arrA = arrA.concat(arrB)
    let arrfinal = [...new Set(arrA)]
    arrfinal.sort(function (a,b){return a-b})
      
    console.log(arrfinal) 
      return (arrfinal)
}

// OOOOOOOOOOOOOOOOOOOOOOOU 

function myFunction(first, second) {
    return [...new Set([...first, ...second])].sort((a, b) => a - b);
  }