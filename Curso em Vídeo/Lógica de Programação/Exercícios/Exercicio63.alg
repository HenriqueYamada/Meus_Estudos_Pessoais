algoritmo "semnome"
//62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de
//várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
//não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
//na tela:
//a) Quantas idades foram digitadas
//b) Qual é a média entre as idades digitadas
//c) Quantas pessoas tem 21 anos ou mais.
var
   media: REAL
   cont, valor, soma, menor_valor, pares: INTEIRO
   resp: CARACTERE
inicio
      menor_valor <- 10000
      Repita
            Escreva("Digite um valor: ")
            Leia(valor)
            
            soma <- soma + valor
            
            Se (valor < menor_valor) entao
               menor_valor <- valor
            FimSe
            
            Se (valor % 2 = 0) entao
               pares <- pares + 1
            FimSe
            Escreva("Deseja continuar? [S/N]: ")
            Leia(resp)
            Escreval("------------------------")
            cont <- cont + 1
      Ate (resp = "N")
      media <- soma/cont
      Escreval("Soma valores: ", soma)
      Escreval("Menor valor: ", menor_valor)
      Escreval("Média dos valores: ", media)
      Escreval("Valores pares: ", pares)
fimalgoritmo
