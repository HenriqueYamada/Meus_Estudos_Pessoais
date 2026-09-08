algoritmo "exercicios"
var
   v1, v2: REAL
inicio
      Escreva("Valor 1: ")
      Leia(v1)
      Escreva("Valor 2: ")
      Leia(v2)
      Se (v1 > v2) entao
         Escreval("O primeiro valor é o maior")
      Senao
           Se (v1 < v2) entao
              EscrevaL("O segundo valor é o maior")
           Senao
                Escreval("Não existe valor maior, os dois são iguais")
           FimSe
      FimSe
fimalgoritmo
