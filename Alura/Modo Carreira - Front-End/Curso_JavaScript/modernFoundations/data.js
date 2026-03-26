const agora = new Date()

console.log(agora)

console.log('Ano: ', agora.getFullYear())
console.log('Mês: ', agora.getMonth())
console.log('Dia: ', agora.getDate())
console.log('Hora: ', agora.getHours())
console.log('Minuto: ', agora.getMinutes())
console.log('Segundos: ', agora.getSeconds())

const nascimento = new Date('1988-07-08:09:30:00.000Z')
console.log(nascimento)
console.log('Data formatada BR: ', nascimento.toLocaleDateString('pt-BR'))
console.log('Data formatada US: ', nascimento.toLocaleDateString('en-US'))