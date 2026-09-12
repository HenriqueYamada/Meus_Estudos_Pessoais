const frutas = ['Uva', 'Melão', 'Kiwi', 'Maçã', 'Morango']

console.log(frutas)

/*console.log('A primeira fruta é: ', frutas[0])
console.log('A última fruta é: ', frutas[4])
console.log('Quantidade de frutas: ', frutas.length)

frutas.push('Melancia')
console.log('Total de frutas após adicionar melancia: ', frutas.length)

console.log('A última fruta é: ', frutas[frutas.length - 1])*/

/*frutas.splice(2, 1)
console.log(frutas)*/

for (let i = 0; i < frutas.length; i++) {
    console.log('Índice: ', i)
    console.log(frutas[i])
}

console.log('Usando forEach:')

frutas.forEach((valor, indice) => {
    console.log('Índice', indice, ': ', valor)
})

for(const fruta of frutas) {
    console.log('Fruta da vez: ', fruta)
}