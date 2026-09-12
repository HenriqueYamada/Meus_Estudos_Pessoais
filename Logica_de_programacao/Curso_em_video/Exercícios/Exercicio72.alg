algoritmo "semnome"
//72) Crie um programa que preencha automaticamente (usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// 5  10  15  20  25  30  35  40  45  50
// 0   1   2   3   4   5   6   7   8  9
var
   cont, i: INTEIRO
   vet: vetor[0..10] de INTEIRO
inicio
      Para i <- 1 ate 10 passo 1 faca
           vet[i] <- vet[i-1] + 5
           Escreva(vet[i])
      FimPara
fimalgoritmo
