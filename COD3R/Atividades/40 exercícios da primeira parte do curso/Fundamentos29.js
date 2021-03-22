function myFunction(arr){
    let dentro = 0;
    let fora =0; 
        for(i=0; i<arr.length; i++){
            if(arr[i]>= 10 && arr[i] <= 20 ){
            dentro++;
            fora++;
        }
    }
        return console.log(`Fora ${fora}, dentro ${dentro}`)
}

myFunction([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])