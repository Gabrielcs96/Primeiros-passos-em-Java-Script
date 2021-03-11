function myFunction(x,y) { 
    let value = 0;  
    if (x%y == 0){ 
       value = x; 
    } else { 
      let i = x
       while (i%y>0){
         i++;
         value = i;
     }
 }
    return value;
 }