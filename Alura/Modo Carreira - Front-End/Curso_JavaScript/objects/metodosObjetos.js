const pessoa = {
    nome: 'Vinícius',
    idade: 37,
    pets: ['Luke'],
    nacionalidade: 'Brasileiro'
}

for (const key in pessoa) {
    console.log('Chave: ', key)
    console.log('Valor: ', pessoa[key])
    console.log()
}

const chaves = Object. keys(pessoa)
const valores = Object.values(pessoa)
const entradas = Object.entries(pessoa)

console.log('Chaves: ', chaves)
console.log('Valores: ', valores)
console.log('Entradas: ', entradas)