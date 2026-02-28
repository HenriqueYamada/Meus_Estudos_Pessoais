algoritmo "semnome"
var
   n1, n2, aux: INTEIRO
inicio
      Escreva("Digite um número: A) ")
      Leia(n1)
      Escreva("Digite um número: B) ")
      Leia(n2)
      aux <- n1
      n1 <- n2
      n2 <- aux
      Escreval("--------------------")
      Escreval("A) ", n1)
      Escreval("B) ", n2)
fimalgoritmo
