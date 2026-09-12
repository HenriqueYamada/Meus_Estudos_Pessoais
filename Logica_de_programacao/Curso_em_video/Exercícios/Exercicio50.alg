algoritmo "semnome"
//50) Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e mostre na tela:
//a) Quais foram os números sorteados
//b) Quantos números estão acima de 5
//c) Quantos números são divisíveis por 3
var
   cont, aleat, acima_cinco, divis_tres, b: INTEIRO
inicio
      Escreva("A) Números gerados: | ")
      Enquanto (cont < 10) faca
            b <- randi(10)
            Escreva(b, " | ")
            Se (b > 5) entao
               acima_cinco <- acima_cinco + 1
            FimSe
            Se (b % 3 = 0) e (b <> 0) entao
               divis_tres <- divis_tres + 1
            FimSe
            cont <- cont + 1
      FimEnquanto
      Escreval()
      Escreval("B) Números acima de 5: ", acima_cinco)
      Escreval("C) Números divisíveis por 3: ", divis_tres)
fimalgoritmo
