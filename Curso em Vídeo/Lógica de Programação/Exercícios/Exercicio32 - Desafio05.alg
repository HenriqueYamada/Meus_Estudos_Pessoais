algoritmo "exercicios"
var
   num_aleat, adv: INTEIRO
inicio
      Escreva("Advinhe o número entre 1 e 5: ")
      Leia(adv)
      Escreva("Número gerado: ")
      Aleatorio 1, 5
      Leia(num_aleat)
      Aleatorio off
      Se (num_aleat = adv) entao
         Escreval("Parabéns! Você acertou o número!")
      Senao
           Escreval("Você errou o número")
      FimSe
fimalgoritmo
