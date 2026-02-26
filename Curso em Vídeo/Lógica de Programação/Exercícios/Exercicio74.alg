Algoritmo "Exercicio73"
//74) Crie um programa que preencha automaticamente (usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
//5 3 5 3 5 3 5 3 5 3
//0 1 2 3 4 5 6 7 8 9
Var
   i: INTEIRO
   vet: vetor[0..9] de INTEIRO
Inicio
      Para i <- 0 ate 9 faca
           Se (i % 2 = 0) entao
              vet[i] <- 5
           Senao
                vet[i] <- 3
           FimSe
           
           Escreva(vet[i])
      FimPara
Fimalgoritmo
