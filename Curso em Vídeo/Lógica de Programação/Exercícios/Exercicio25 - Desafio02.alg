algoritmo "exercicios"
var
   l1, l2, l3: REAL
inicio
      Escreva("Lado 1: ")
      Leia(l1)
      Escreva("Lado 2: ")
      Leia(l2)
      Escreva("Lado 3: ")
      Leia(l3)
      Se ((l1 < l2 + l3) e (l2 < l1 + l3) e (l3 < l1 + l2)) entao
         Escreval("É possível formar um triângulo")
      Senao
         Escreval("Não é possível formar um triângulo")
      FimSe
fimalgoritmo
