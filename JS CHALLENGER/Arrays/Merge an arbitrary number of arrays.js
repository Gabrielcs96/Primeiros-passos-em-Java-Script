// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction(...arr) {
    let novoArray = [];
      
      arr.map(subArray => { 
        novoArray = novoArray.concat(subArray)
        console.log(subArray)})
    return (novoArray)
      }

//      OUUUUUUUUUUUUUUUU


function myFunction( ...arrays ) {
    return arrays.flat()
    }