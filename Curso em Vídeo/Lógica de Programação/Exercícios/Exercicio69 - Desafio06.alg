algoritmo "exercicios"
//69) [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma
//PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
//a soma entre todos os valores da sequência.

var
   termo, razao, contador, soma: INTEIRO
inicio
      Escreva("Primeiro termo da PA: ")
      Leia(termo)
      Escreva("Razão da PA: ")
      Leia(razao)
      Para contador <- 1 ate 10 passo 1 faca
           Escreval(contador, "° termo: ", termo)
           termo <- termo + razao
           soma <- soma + contador
      FimPara
      Escreval()
      Escreval("A soma entre todos os valores da PA é: ", soma)
fimalgoritmo
