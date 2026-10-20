// Você está desenvolvendo um sistema de pedidos online. Em certo momento, o sistema precisa criar uma cópia da lista de pedidos para simular alterações, sem modificar o array original. Escreva um programa que:

// Crie um array com alguns pedidos.
// Faça uma cópia do array.
// Adicione um novo item apenas na cópia.
// Exiba os dois arrays para mostrar que o original não foi alterado.

const pedidos = ['camiseta', 'calça', 'tênis'];

let copia = pedidos.slice();
copia.push('boné');

console.log("Array original: ", pedidos);
console.log("Array copiado: ", copia);