const valores = [7,7,8.2,763,9.2];
console.log(valores[0], valores[3]);

console.log(valores[32]); // Entrando numa parte inexistente do array para achar o undefined

valores[54] = 12; // nesta parte do código eu estou " definindo valores vazios", já que eu estou atribuindo um valor na casa 54 
console.log(valores);
console.log(valores.length);


valores.push({id:3}, false, null, 'teste'); // push para anexar ao fim do array
console.log(valores);

