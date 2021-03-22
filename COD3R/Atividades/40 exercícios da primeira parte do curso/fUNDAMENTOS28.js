function myFunction(arr){
arr.map(val => {
    if(val%2 != 0 ){
        console.log(val)
    }
})
    
}

myFunction([10,11,9,5,4,2,1,7,32])