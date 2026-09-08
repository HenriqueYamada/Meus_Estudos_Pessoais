algoritmo "semnome"
var
   a, b, c, d: REAL
   x: INTEIRO
inicio
      Escreva("Digite um número: ")
      Leia(x)
      a <- x^2- 4
      b <- x%3
      c <- x^b + 2
      d <- raizq(x^3)
      Escreval("a) X^2- 4 = ", a)
      Escreval("b) O resto da divisão de X / 3 = ", b)
      Escreval("c) X^b + 2 = ", c)
      Escreval("d) Raiz quadrada de X^3 = ", d)
fimalgoritmo
