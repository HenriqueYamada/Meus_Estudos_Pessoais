Algoritmo "Exercicio73"
//73) Crie um programa que preencha automaticamente (usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
//9 8 7 6 5 4 3 2 1 0
//0 1 2 3 4 5 6 7 8 9
Var
   i: INTEIRO
   vet: vetor[0..9] de INTEIRO
Inicio
      Para i <- 0 ate 9 faca
           vet[i] <- 9 - i
           Escreva(vet[i])
      FimPara
Fimalgoritmo
