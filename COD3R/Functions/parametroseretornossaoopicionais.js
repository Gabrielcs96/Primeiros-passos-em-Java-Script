function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor da área acima do permitido : ${area}m2`);
    }
    else {
        return area;
    }
} 
console.log(area(30,2)); // tem que retornar undefined, pq não é pertinente 
console.log(area(2,4)); // tem que calcular normalmente 
console.log(area()); // NaN 
console.log(area(2,3,4,5,6,7));// tem que usar apenas o 2 e 3 
console.log(area(2)); // tem que retornar um "NaN"
 