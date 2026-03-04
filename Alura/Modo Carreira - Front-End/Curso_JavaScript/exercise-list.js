//*1. Boas-vindas personalizadas:* Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"

let nome = 'Henrique'
console.log('Olá, ', nome, '! Seja bem-vindo(a) ao curso de JavaScript!')

//*2. Cálculo de idade:* Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."

let anoAtual = 2026
let anoNascimento = 2008
let idade = anoAtual - anoNascimento
console.log('Você tem ', idade, ' anos.')

//*3. Mensagem de localização:* Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País."

let cidade = 'Assis'
let estado = 'São Paulo'
let pais = 'Brasil'

console.log('Você está em ', cidade, ' - ', estado, ', ', pais)

//*4. Tipo da variável:* Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.

let temCarteira = true
console.log('Tipo da variável temCarteira: ', typeof temCarteira)

//*5. Simulação bancária simples:* Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.

let saldo = 0
saldo = saldo + 200
saldo = saldo - 50

console.log('Você atualmente na carteira, após o depósito e a retirada: R$', saldo)

//*6. Média de notas:* Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.

let matematica = 9
let portugues = 7
let ciencias = 6
let media = (matematica + portugues + ciencias)/3
console.log('Sua média é de ', media)

//*7. Reajuste de salário*: Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.

let salario = 3000
let aumento = (salario * 10) / 100
let novoSalario = salario + aumento
console.log('Novo salário de: R$', novoSalario)

//*8. Contador de cliques:* Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.

let clique = 0
console.log('Cliques: , ', clique, '.Clique na tela!')

clique = 1
console.log('Cliques: , ', clique, '. Clique na tela de novo!')

clique = 2
console.log('Cliques: , ', clique, '. Clique na tela mais uma vez!')

clique = 3
console.log('Total de cliques: ', clique, '. Obrigado por fazer esta simulação!')

//*9. Constantes não podem ser alteradas:* Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.

const pi = 3.1415
console.log('Valor de pi: ', pi)

//pi = 3.14
//console.log('Valor alterado de i: ', pi)

console.log('Não é possível alterar o valor de uma constante!')

//*10. Concatenando tipos diferentes:* Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.

let mensagem = 'Olá, Mundo! '
let numero = 100
let juncao = mensagem + numero
console.log(typeof juncao)