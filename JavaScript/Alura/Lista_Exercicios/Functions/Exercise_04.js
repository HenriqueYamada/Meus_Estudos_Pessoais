// Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — mas a lógica precisa estar encapsulada em uma arrow function.

// Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:

// "Par" se o número for par
// "Ímpar" se for ímpar

const verificarParidade = num => {
    if (num % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(verificarParidade(8));
console.log(verificarParidade(5));