var numeros = [1, 2 ,10, 20, 30, 40, 50, 43];
var pares = [];
var impares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else if (numeros[i] % 2 !== 0) {
        impares.push(numeros[i]);
    }
}

console.log(pares);
console.log(impares);