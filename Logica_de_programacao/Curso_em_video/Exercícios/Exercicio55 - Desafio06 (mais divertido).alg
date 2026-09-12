algoritmo "exercicios"
var
   cont, num, aleat: INTEIRO
inicio
      cont <- 4
      Escreval("-----VOCÊ TEM 4 TENTATIVAS-----")
      Enquanto (cont >= 1) faca
               Escreva("Digite um número entre 1 e 5: ")
               Leia(num)
               aleat <- randi(5) + 1
               Escreval("Número gerado: ", aleat)
               cont <- cont - 1
               Se (num = aleat) entao
                  Escreval("Parabéns! Você acertou o número!")
                  Escreval()
                  interrompa
               Senao
                    Se (cont = 0) entao
                       Escreval()
                       Escreval("-----SUAS TENTATIVAS ESGOTARAM!-----")
                       interrompa
                    Senao
                       Escreval("Você errou o número!")
                       Escreval()
                       Escreval("-----VOCÊ TEM MAIS ", cont, " TENTATIVAS-----")
                    FimSe

               FimSe
      FimEnquanto
      
      Escreval("Obrigado por jogar!")
fimalgoritmo
