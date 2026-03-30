//Estrutura do laço de repetiação FOR
for (let cont = 1; cont <= 5; cont++) {
    console.log('Número atual: ', cont)
}

for (let num = 0; num < 15; num++) {
    if (num % 2 == 0) {
        console.log('Número par encontrado: ', num)
    }
}

for (let num = 0; num <= 15; num++) {
    if (num % 2 == 1) {
        console.log('Número ímpar encontrado: ', num)
    }
}

const palavra = 'calopsita'
console.log('Ele tem uma ')

for (let cont = 0; cont < palavra.length; cont++) {
    console.log(palavra[cont])
}