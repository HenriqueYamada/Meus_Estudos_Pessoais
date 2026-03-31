const num1 = 2
const num2 = 4
const operacao = 'soma'

if (operacao === 'soma') {
    console.log(num1 + num2)
} else if (operacao === 'multiplicacao') {
    console.log(num1 * num2)
} else {
    console.log('Operação não identificada')
}

let salario = 2000

if (salario < 4000) {
    salario = salario + salario * 9 / 100
} else if (salario >= 4000 && salario < 7000) {
    salario = salario + salario * 7 / 100
} else if (salario >= 7000 && salario < 11000) {
    salario = salario + salario * 5 / 100
} else {
    salario = salario + salario * 3 / 100
}

console.log('Novo salário: R$', salario)

//Verificar se um ano é bissexto

const ano = 1900

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
    console.log(ano, ' é um ano bissexto')
} else {
    console.log(ano, ' não é um ano bissexto')
}

//Verificar se um estudante receberá bônus na nota

const nome= 'Roberta'
const nota = 8
const faltas = 3

const recebeBonus = (nota >= 8) && (faltas <= 2)
    ? `${nome} recebe nônus`
    : `${nome} não recebe bônus`
console.log(recebeBonus)

//criar um fluxo que identifica o tipo de usuário e comunica de acordo

const user = 'super premium'

switch (user) {
    case 'free':
        console.log('Acesso limitado')
        break;

    case 'premium':
        console.log('Acesso total')
        break;

    case 'super premium':
        console.log('Acesso total e bônus')
        break;

    default:
        console.log('Tipo de user desconhecido')
        break;
}