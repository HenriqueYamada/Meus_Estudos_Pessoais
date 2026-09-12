algoritmo "semnome"
//79) Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
//No final, mostre quais são os números pares que foram digitados e em que
//posições eles estão armazenados.
var
   i, num: INTEIRO
   vet: vetor[1..10] de INTEIRO
inicio
      Para i <- 1 ate 10 faca
           Escreva("Digite um número: ")
           Leia(num)
           vet[i] <- num
      FimPara

      Escreval("======================")
      Escreval("Números pares e suas posições:")

      Para i <- 1 ate 10 faca
           Se (vet[i] % 2 = 0) entao
              Escreval("Número par: ", vet[i]:5, "; Na posição: ", i)
           FimSe
      FimPara
fimalgoritmo
