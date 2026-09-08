algoritmo "semnome"
//49) Crie um programa que leia 6 números inteiros e no final mostre quantos deles são pares e quantos são ímpares.
var
   cont, num, soma_par, soma_impar: INTEIRO
inicio
      cont <- 1
      Enquanto (cont <= 6) faca
               Escreva("Digite um número: ")
               Leia(num)
               Se (num % 2 = 0) entao
                  soma_par <- soma_par + 1
               Senao
                  soma_impar <- soma_impar + 1
               FimSe
               cont <- cont + 1
      FimEnquanto
      Escreval(soma_par ," são números pares e ", soma_impar, " são números impares")
fimalgoritmo
