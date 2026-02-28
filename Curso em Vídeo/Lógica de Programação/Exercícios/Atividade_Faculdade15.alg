algoritmo "semnome"
var
   num_f, cont, fatorial: INTEIRO
inicio
      fatorial <- 1
      Escreva("Digite um número fatorial: ")
      Leia(num_f)
      Para cont <- num_f ate 1 passo -1 faca
           fatorial <- fatorial * cont
      FimPara
      
      Escreval("O fatorial de ", num_f, " é ", fatorial)
fimalgoritmo
