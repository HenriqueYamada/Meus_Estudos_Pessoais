//const readline = require('readline')
import { createInterface } from 'readline'
import { soma, subtracao, multiplicacao, divisao } from './operacoes.js'

const leitor = createInterface( {
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite o primeiro número:\n> ', (numero1) => {
    leitor.question('Digite a opreação:+: Adição, -: Subtracão, x: Multiplicacao, /: Divisao\n> ', (operacao) => {
        leitor.question('Digite o segundo número:\n> ', (numero2) => {
            const num1 = Number(numero1)
            const num2 = Number(numero2)

            let result = null

            if (operacao == '+') {
                result = soma(num1, num2)
            } else  if (operacao == '-'){
                result = subtracao(num1, num2)
            } else if (operacao == 'x') {
                result = multiplicacao(num1, num2)
            } else if (operacao == '/') {
                result = divisao(num1, num2)
            } else {
                console.log('Operação inválida!')
            }

            if (result != null) {
                console.log('O resultado é: ', result)
            }

            leitor.close()
        })
    })
})