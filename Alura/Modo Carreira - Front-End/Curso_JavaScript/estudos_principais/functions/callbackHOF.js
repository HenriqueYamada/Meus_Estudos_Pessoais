//HOF - Higher-Order Funcion: Função que recebe outra funcção como parâmetro

function calcular(num1, num2, operacao) {
    return operacao(num1, num2)
}

function soma(num1, num2) {
    return num1 + num2
}

function divisao(num1, num2) {
    return num1 / num2
}

const resSoma = calcular(3, 8, soma)
console.log('Soma: ', resSoma)

const resDivisao = calcular(4, 8, divisao)
console.log('Divisão: ', resDivisao)