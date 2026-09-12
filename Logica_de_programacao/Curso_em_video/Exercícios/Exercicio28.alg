algoritmo "exercicios"
var
   largura, altura, area: REAL
inicio
      Escreva("Largura: ")
      Leia(largura)
      Escreva("Atura: ")
      Leia(altura)
      area <- largura*altura
      Se (area < 100) entao
         Escreval("TERRENO POPULAR")
      Senao
           Se (area >= 100) e (area <= 500) entao
              Escreval("TERRENO MASTER")
           Senao
                Escreval("TERRENO VIP")
           FimSe
      FimSe
fimalgoritmo
