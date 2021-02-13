//estratégia antiga para gerar valor padrão 
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;

}



// estratégia2
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = b !== undefined ? b : 1;
    c = c !== undefined ? c : 1;
    return a + b + c;
}

// estratégia 3
function soma3(a, b, c) {
    a = a in arguments ? a : 1;
    b = b in arguments ? b : 1;
    c = c in arguments ? c : 1;
    return a + b + c;
}

// estratégia 4

function soma4(a, b, c) {
    a = isNaN(a) ? a : 1;
    b = isNaN(b) ? b : 1;
    c = isNaN(c) ? c : 1;
    return a + b + c;
}


console.log(soma1(1, 2, 3));
console.log(soma1());
console.log(soma1(1, 2));
console.log(soma1(0, 0, 0));

console.log(soma2(1, 2, 3));
console.log(soma2());
console.log(soma2(1, 2));
console.log(soma2(0, 0, 0));


console.log(soma3(1, 2, 3));
console.log(soma3());
console.log(soma3(1, 2));
console.log(soma3(0, 0, 0));


console.log(soma4(1, 2, 3));
console.log(soma4());
console.log(soma4(1, 2));
console.log(soma4(0, 0, 0));


// valor padrão do ES15
function soma6(a = 10, b = 10, c = 10) {
    return (a + b + c);
}

console.log(soma6());
console.log(soma6('Laranja', 'morango', 'limão'));
