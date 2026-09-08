algoritmo "semnome"
//76) Crie um programa que preencha automaticamente um vetor numérico com 7
//números gerados aleatoriamente pelo computador e depois mostre os valores
//gerados na tela.
var
   i, aleat: INTEIRO
   vet: vetor[1..7] de INTEIRO
inicio
      Para i <- 1 ate 7 faca
            aleat <- randi(100)
            vet[i] <- aleat
            escreva(vet[i])
      FimPara
fimalgoritmo
