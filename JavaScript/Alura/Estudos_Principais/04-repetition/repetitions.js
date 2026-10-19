//Gerar números açeatórios de 1 a 50

let tentativas = 0

for (let i = 1; i <= 30; i++) {
    let num = Math.floor(Math.random() * (50 - 1 + 1) + 1)

    if (num === 15) {
        console.log(`${num} em ${i} tentativas`)
        break
    }
    tentativas++
}

console.log('Total tentativas: ', tentativas)

//Gerar núemros aleatórios de 1 a 50

contador = 0

for (i = 0; i <= 30; i++) {
    num = Math.floor(Math.random() * (50 -1 + 1) + 1)

    if (num % 5 == 0) {
        continue;
    }

    contador++
}

console.log(contador)

//while

const numeroSecreto = 8
let numeroAleatorio = 0
let tentativas2 = 0

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 -1 + 1) + 1)  
    tentativas2++
}

console.log(`Acertou em ${tentativas2} tentativas`)

let numRandom = 0

do{
    numRandom = Math.floor(Math.random() * (50 -1 + 1) + 1)  
    console.log(numRandom)

} while (numRandom % 2 !== 0)

console.log('')


const texto = 'luz azul'
const textoFormatado = texto.replaceAll(' ', '').toLocaleLowerCase()
textoInvertido = ''

for (i = textoFormatado.length - 1; i >= 0; i--) {
    textoInvertido += textoFormatado[i]
}

console.log(textoInvertido)

if (textoFormatado === textoInvertido) {
    console.log(`${texto} é um palíndromo`)
} else {
    console.log(`${texto} não é um palíndromo`)
}