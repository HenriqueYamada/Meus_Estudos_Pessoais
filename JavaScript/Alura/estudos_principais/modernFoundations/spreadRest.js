let camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'desenvolvedora'
}

const camila2 = { ...camila1}
camila2.idade = 30

console.log(camila1)
console.log(camila2)

camila1 = {
    ...camila2,
    profissao: 'Desenvolvedora Senior',
    possuiCNH: true
}

console.log(camila1)

const { nome, ...resto } = camila1
console.log(nome)
console.log(resto)