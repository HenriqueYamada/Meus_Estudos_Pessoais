algoritmo "semnome"
//47) Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 + 450 + 400 + 350 + 300 + ... + 50 + 0
var
   cont, soma: INTEIRO
inicio
      cont <- 500
      Enquanto (cont >= 0) faca
               Escreva(cont, " ")
               soma <- soma + cont
               cont <- cont - 50
      FimEnquanto
      Escreval()
      Escreval("A soma é de ", soma)
fimalgoritmo
