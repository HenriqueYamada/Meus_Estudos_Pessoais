const idade = 20
const maiorDeIdade = idade >= 18
const possuiCNH = true

// Comparador AND - &&
const podeDirigir = maiorDeIdade && possuiCNH
console.log('Pode dirigir?: ', podeDirigir)

// Comparador OR - ||
const podeViajarSozinho = maiorDeIdade || possuiCNH
console.log('Pode viajar sozinho?: ', podeViajarSozinho)

// Comparador NOT - !
const precisaDeAcompanhante = !maiorDeIdade
console.log('Precisa de um acompanhante?: ', precisaDeAcompanhante)