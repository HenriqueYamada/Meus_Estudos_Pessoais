algoritmo "exercicios"
var
   idade, resta, passou: INTEIRO
inicio
      Escreva("Idade: ")
      Leia (idade)
      resta <- 18 - idade
      passou <- idade - 18
      Se (idade >= 18) entao
         Escreval("Passou-se ", passou, " ano(s) do alistamento militar")
      Senao
         Escreval("Resta-se ", resta, " ano(s) do alistamento militar")
      FimSe
fimalgoritmo
