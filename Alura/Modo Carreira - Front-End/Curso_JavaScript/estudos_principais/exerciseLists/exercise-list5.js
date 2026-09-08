/*1. Função de saudação
Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.*/

function saudacao(){
    console.log('Olá! Seja bem-vindo(a)!')
}

saudacao()

/*2. Função com parâmetros
Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."*/

function apresentarPessoa(nome, idade) {
    console.log('Olá, meu nome é ', nome, ' e tenho ', idade, ' anos')
}

apresentarPessoa('Henrique', 18)

/*3. Cálculo de IMC
Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
A função deve calcular o IMC utilizando a fórmula:

IMC = peso / (altura * altura)

A função deve retornar o valor do IMC.
Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.*/

function calcularIMC(peso, altura) {
    let imc = peso / (altura ** 2)
    return imc
}

let imc = calcularIMC(75, 1.80)
console.log('imc: ', imc)

/*4. Verificar aprovação
Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.*/

function verficarAprovacao(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

verficarAprovacao(6)

/*5. Número par ou ímpar
Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.*/

function par(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}

let parOuImpar = par(6)
console.log('O núemro é par? ', parOuImpar)

/*6. Função soma
Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.*/

function soma(num1, num2) {
    return num1 + num2
}

let resultSoma = soma(5, 7)
console.log('A soma é ', resultSoma)

/*7. Reutilizando código
Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
A função deve receber dois parâmetros: valorCompra e valorPago.

A função deve:

calcular o valor do troco
retornar o valor calculado
Depois, utilize o retorno da função para exibir o valor do troco no console.*/

function calcularTroco(valorCompra, valorPago) {
    return valorPago - valorCompra
}

let troco = calcularTroco(30, 32)
console.log('O troco é R$', troco)

/*8. Arrow function
Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.*/

/*const resultSoma2 = (num1, num2) => {
    return num1 + num2
}

console.log(resultSoma2(1, 2))

or*/

const resultSoma2 = (num1, num2) => num1 + num2
soma = resultSoma2(1, 2)
console.log('Soma: ', soma)

/*9. Callback simples
Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".*/

const executarAcao = (acao) => acao()

const interacao = () => console.log('Executando ação!')

executarAcao(interacao)

/*10. Desafio do quiz
Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).*/

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function fazerPergunta(pergunta, respostaCorreta) {
    rl.question(pergunta, (resposta) => {
        if (resposta.trim().toLowerCase() === respostaCorreta.toLowerCase()) {
            console.log('A resposta está certa!')
        } else {
            console.log('A resposta está errada!')
        }
        rl.close()
    })
}

fazerPergunta('Qual palavra usamos para criar uma função?\n (a) define \n (b) function \n (c) create\n > ', 'b')
