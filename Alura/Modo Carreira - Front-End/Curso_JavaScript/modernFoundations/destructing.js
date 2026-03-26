let pessoa = {
    nome: 'Nathália',
    idade: 17,
    profissao: 'Estudante'
}

console.log(pessoa.nome)
console.log(pessoa.idade)

const { nome, idade } = pessoa

console.log(pessoa.nome)
console.log(pessoa.idade)

function saudacao ( { nome, idade }) {
    console.log('Olá, ', nome)
    if (idade >=18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
}

saudacao(pessoa)

const frutas = ['uva', 'banana']
const [primeira, segunda] = frutas

console.log(primeira)
console.log(segunda)