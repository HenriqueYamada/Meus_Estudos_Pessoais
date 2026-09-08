/*1. Verificação de maioridade
Crie uma variável idade.
Exiba no console o resultado da expressão que verifica se a idade é maior ou igual a 18.*/

let idade = 18
let maiorirdade = idade >= 18
console.log('1 - É maior de idade?: ', maiorirdade)

/*2. Situação do aluno
Crie duas variáveis com notas de um aluno.
Calcule a média e exiba no console o resultado da expressão que verifica se a média é maior ou igual a 7.*/

let nota1 = 7
let nota2 = 5
media = (nota1 + nota2) / 2
console.log('2 - A média das notas é de: ', media)

/*3. Simulação de troco
Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.*/

let valorCompra = 35.90
let valorPago = 50
let troco = valorPago - valorCompra

console.log('3 - O troco é de: R$', troco.toFixed(2))

/*4. Validação de senha
Crie duas variáveis com senhas digitadas em momentos diferentes.
Exiba no console o resultado da comparação que verifica se as senhas são iguais.*/

let senhaCorreta = 1234
let senha = 12345
let verificacaoDeSenha = senhaCorreta == senha
console.log('4 - A senha está correta?: ', verificacaoDeSenha)

/*5. Controle de faltas
Crie as variáveis totalAulas e faltas.
Calcule o limite de faltas permitido (25% do total) e exiba no console o resultado da expressão que verifica se as faltas ultrapassam esse limite.*/

let totalAulas = 100
let faltas = 30
let limiteDeFaltas = 100 * 25 / 100
let verificacaoDeFaltas = limiteDeFaltas < faltas
console.log('5 - Ultrapssou o limite de aulas?: ', verificacaoDeFaltas)

/*6. Verificação de login
Crie duas variáveis booleanas: temLogin e temSenha.
Exiba no console o resultado da expressão lógica que verifica se ambas são verdadeiras.*/

let temLogin = true
let temSenha = false
let acesso = temLogin && temSenha
console.log('6 - O usuário tem acesso ao site?: ', acesso)

/*7. Valor negado
Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.*/

let disponivel = true
console.log('7 - O usuário está disponível?: ', !disponivel)

/*8. Condições compostas
Crie duas variáveis numéricas.
Exiba no console o resultado da expressão que verifica se:

os dois números são pares e
os dois números são iguais.*/

let num1 = 6
let num2 = 8
let pares = num1 % 2 == 0 && num2 % 2 == 0
let iguais = num1 == num2
console.log('8 - Os valores são pares?: ', pares)
console.log('8 - Os dois valores são iguais?: ', iguais)

/*9. Calculadora de porcentagem
Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."*/

let num = 120
let porcentagem = 15
let resultado = 120 * 15 / 100
console.log('9 - ', porcentagem, '% de ', num, ' é igual a ', resultado)

/*10. Ordem de operações
Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.*/

console.log('2 + 3 * 5 = ', 2 + 3 * 5, '. A multiplicação é feita primeiro por conta da ordem de sinais/contas')