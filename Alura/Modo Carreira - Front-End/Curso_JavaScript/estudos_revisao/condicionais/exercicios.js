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