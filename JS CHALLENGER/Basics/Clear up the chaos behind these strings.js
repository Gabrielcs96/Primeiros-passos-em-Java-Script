// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(stra,strb){
    let a = strb.split('').reverse().join('');
    let b = stra.concat(a);
    let c = b.replace("%", "");
    return (c.charAt(0).toUpperCase() + c.slice(1));
  }