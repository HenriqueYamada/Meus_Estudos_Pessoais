algoritmo "exercicios"
var
   n1, n2, media: REAL
inicio
      Escreva("Nota 1: ")
      Leia(n1)
      Escreva("Nota 2: ")
      Leia(n2)
      media <- (n1 + n2)/2
      Se (media >= 7) entao
         Escreval("APROVADO")
      Senao
           Se (media >= 5) e (media < 7) entao
              Escreval("RECUPERAÇÃO")
           Senao
                Escreval("REPROVADO")
           FimSe
      FimSe
fimalgoritmo
