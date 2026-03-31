// contar quantos numeros pares e quantos numeros impares nos temos entre 0 100

let totalNumeroPares = 0
let totalNumerosImpares = 0

// laço de repetição

for (let cont = 0; cont <= 100; cont++) {
    if (cont % 2 == 0) {
        totalNumeroPares++
    } else {
        totalNumerosImpares++
    }
}

console.log('Total de números pares: ', totalNumeroPares)
console.log('Total de números ímpares: ', totalNumerosImpares)