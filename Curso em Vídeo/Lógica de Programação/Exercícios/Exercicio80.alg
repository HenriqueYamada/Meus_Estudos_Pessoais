algoritmo "semnome"
//80) Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
//15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
//número (chave) e seu programa deve mostrar em que posições essa chave foi
//encontrada. Mostre também quantas vezes a chave foi sorteada.

var
   i, num, num_chave, soma: INTEIRO
   vet: vetor[1..30] de INTEIRO
inicio
      Para i <- 1 ate 30 faca
           vet[i] <- randi(15) + 1
      FimPara

      Escreval("======================")
      Escreva("Adivinhe o número: ")
      Leia(num_chave)
      
      Escreval("======================")
      Escreval("Posições que esse número foi achado:")

      Para i <- 1 ate 30 faca
           Se (vet[i] = num_chave) entao
              Escreva(i, ",")
              soma <- soma + 1
           FimSe
      FimPara
      
      Escreval(" Fim!")
      Escreval("Vezes que esse número foi sorteado: ", soma, " vez")
fimalgoritmo
