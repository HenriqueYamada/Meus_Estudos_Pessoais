algoritmo "semnome"
//83) [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
//aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
//números gerados e depois coloque o vetor em ordem crescente, mostrando no final
//os valores ordenados.

var
   i, j, aleat, aux: INTEiRO
   vet: vetor[1..20] de INTEIRO
inicio
      Escreval("Números gerados: ")
      Para i <- 1 ate 20 faca
           aleat <- randi(100)
           vet[i] <- aleat
           Escreval(vet[i], ";")
      FimPara
      Escreval("============================")
      Escreval("Números na ordem crescente: ")
      Para i <- 1 ate 19 faca
           Para j <- i+1 ate 20 faca
                Se (vet[i] > vet[j]) entao
                   aux <- vet[i]
                   vet[i] <- vet[j]
                   vet[j] <- aux
                FimSe
           FimPara
           Escreval(vet[i], ";")
      FimPara
fimalgoritmo
