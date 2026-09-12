/*1. Contador de 1 a 10
Use um for para mostrar no console os números de 1 até 10, um por linha.*/

for (let cont = 1; cont <= 10; cont++) {
    console.log('Número: ', cont)
}

/*2. Soma de 1 a 100
Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.*/
let soma = 0

for (let cont = 1; cont <= 100; cont++) {
    soma = soma + cont    
}

console.log('A soma dos números 1 até 100 é ', soma)

/*3. Tabuada personalizada
Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.*/

let num = 5

for (let cont = 1; cont <= 10; cont++) {
    console.log(num, ' x ', cont, ' = ', num * cont)
}

/*4. Contagem regressiva
Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".*/

cont = 10
while (cont >= 0) {
    console.log(cont)
    cont--
}

/*5. Receber números até digitar 0
Simule a digitação de números usando uma variável numeroDigitado.
Use um do...while para repetir a execução até que o valor seja 0.
Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final.

📌 Observação:
Considere que o valor de numeroDigitado é alterado manualmente a cada repetição.*/
let somaExerc5 = 0
do {
    num = 10
    if (num != 0) {
        somaExerc5++
    }
} while (num == 0)

console.log('soma dos números diferentes de 0: ', somaExerc5)

/*6. Jogo do número secreto
Crie uma variável numeroSecreto com valor fixo.
Simule até 3 tentativas usando um for.
Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:

"Acertou!" se for igual
"Tente novamente" se for diferente
📌 Observação:
As tentativas devem ser simuladas por variáveis dentro do laço.*/

let numCerto = 7

for (let cont = 1; cont <= 3; cont++) {
    console.log('Advinhe o núemro certo: ')
    let numChute = 7
    
    if (numCerto == numChute) {
        console.log('Acertou!')
    } else {
        console.log('Tente novamente!')
    }
}

/*7. Idade ao longo dos anos
Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.*/

for (let cont = 1; cont <= 1; cont++) {
    let anoNascimento = 1984
    let anoAtual = 2026
    let idade = anoAtual - anoNascimento

    console.log('Idade: ', idade)
}

/*8. Listando números pares
Mostre todos os números pares entre 1 e 50 usando for.*/

for (let cont = 1; cont <= 50; cont++) {
    if (cont % 2 == 0) {
        console.log(cont)
    }
}

/*9. Contar múltiplos de 3 entre 1 e 100
Mostre no console quantos números entre 1 e 100 são divisíveis por 3.*/

soma = 0

for (let cont = 1; cont <= 100; cont++) {
    if (cont % 3 == 0) {
        console.log(cont)
        soma++
    }
}

console.log('Qntd de números divisíveis por 3: ', soma)

/*10. Menu com repetição
Crie uma variável opcao.
Use um do...while para exibir repetidamente as opções:

1 - Ver saldo
2 - Fazer depósito
3 - Sair
O menu deve continuar sendo exibido até que a opção seja 3.
Mostre no console a ação correspondente a cada opção.

📌 Observação:
A escolha da opção deve ser simulada por valores atribuídos à variável opcao.*/

let opcao = 2

do {
    switch (opcao) {
        case 1:
            console.log('Saldo visto!')
            break;
    
        case 2:
            console.log('Depósito feito!')
            break;
    }

    opcao++
} while(opcao = 3)

console.log('Sair')