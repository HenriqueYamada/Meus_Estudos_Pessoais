algoritmo "exercicios"
var
   l1, l2, l3: REAL
   eq, iso, esc: LOGICO
inicio
      Escreva("Lado 1: ")
      Leia(l1)
      Escreva("Lado 2: ")
      Leia(l2)
      Escreva("Lado 3: ")
      Leia(l3)
      Se ((l1 >= l2 + l3) ou (l2 >= l1 + l3) ou (l3 >= l1 + l2)) entao
         Escreval("Não é possível formar o triângulo")
      Senao
        Se ((l1 = l2) e (l2 = l3)) entao
           Escreval("O triângulo é equilátero")
        Senao
           Se ((l1 = l2) ou (l1 = l3) ou (l2 = l3)) entao
              Escreval("O triangulo é isóceles")
           Senao
                Escreval("O triângulo é escaleno")
           FimSe
        FimSe
      FimSe
      

fimalgoritmo
