algoritmo "semnome"
//46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 + 8 + 10 + 12 + 14 + ... + 98 + 100.
var
   cont, soma: INTEIRO
inicio
      cont <- 6
      Enquanto (cont <= 100) faca
               Escreva(cont, " ")
               soma <- soma + cont
               cont <- cont + 2
      FimEnquanto
      Escreval()
      Escreval("A soma é de ", soma)
fimalgoritmo
