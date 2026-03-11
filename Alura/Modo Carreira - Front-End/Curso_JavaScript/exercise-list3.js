/*1. Verificação de idade para compra de bebida
Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". Caso contrário, mostre "Venda proibida para menores de 18 anos".*/

let idade = 18
idade >= 18 ? console.log('Pode comprar bebida alcoólica.') : console.log('Venda proibida para menores de 18 anos.')

/*2. Saudação de acordo com a hora
Crie uma variável horaAtual. Se estiver entre 6 e 12, mostre "Bom dia"; entre 12 e 18, "Boa tarde"; caso contrário, "Boa noite".*/

let horaAtual = 14
if (horaAtual >= 6 && horaAtual < 12) {
    console.log('Bom dia!')
} else if (horaAtual >= 12 && horaAtual < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

/*3. Verificação de número positivo ou negativo
Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.*/

let num = -23
num > 0 ? console.log('O número é positivo') : console.log('O número é negativo')

/*4. Conversão de nota em conceito
Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).*/

let nota = 1
if (nota >= 9 && nota <= 10) {
    console.log('nota: A')
} else if (nota >= 8 && nota < 9) {
    console.log('nota: B')
} else if (nota >= 6 && nota < 8) {
    console.log('nota: C')
} else if (nota >= 4 && nota < 6) {
    console.log('nota: D')
} else {
    console.log('nota: E')
}

/*5. Número par ou ímpar com ternário
Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.*/

let num2 = 19783
num2 % 2 == 0 ? console.log('O número é par') : console.log('O núemro é ímpar')

/*6. Menu com switch-case
Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".*/

console.log('1 - Cadastrar')
console.log('2 - Listar')
console.log('3 - Sair')
let opcao = 2
switch (opcao) {
    case 1:
        console.log('Cadastro feito!')
        break

    case 2:
        console.log('Listagem feita!')
        break

    default:
        console.log('Sair')
        break
}

/*7. Validação de campo obrigatório
Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". Caso contrário, mostre "E-mail válido".*/

let email = 'henriqueyamada01@gmail.com'
if (email) {
    console.log('E-mail válido!')
} else {
    console.log('Preencha o campo de e-mail')
}

/*8. Validação de senha segura
Crie duas variáveis:

senha

senhaValida (valor true ou false, definido manualmente)

Se senhaValida for verdadeira, mostre "Senha válida".
Caso contrário, mostre "Senha muito curta".

📌 Observação:
Considere que a validação do tamanho da senha já foi feita previamente e o resultado está armazenado na variável senhaValida.*/

let senha = 12
let senhaValida = true

if (senhaValida == true) {
    console.log('Senha válida')
} else {
    console.log('Senha muito curta')
}

/*9. Compra com saldo
Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".*/

let saldoDisponivel = 50
let valorCompra = 50
if (valorCompra <= saldoDisponivel) {
    console.log('Compra aprovada!')
} else {
    console.log('Saldo insuficiente!')
}

/*10. Validação de formulário completo

Crie três variáveis:

nome
email
idade
Crie também uma variável booleana chamada formularioValido que indique se o formulário está válido (true ou false).

Se formularioValido for verdadeiro, mostre "Formulário enviado com sucesso".
Caso contrário, mostre "Por favor, preencha todos os campos corretamente".

📌 Observação:
Considere que a verificação dos campos já foi realizada anteriormente e o resultado está armazenado na variável formularioValido.*/

let nome = "Henrique"
let email2 = "henriqueyamada01@gmail.com"
let idadade = 18
let formularioValido = false

if (formularioValido == true) {
    console.log('Formulário enviado com sucesso')
} else {
    console.log('Por favor, preencha todos os campos corretamente')   
}