algoritmo "exercicios"
var
   dist, preco: REAL
inicio
      Escreva("Distância: ")
      Leia(dist)
      Se (dist <= 200) entao
        preco <- dist*0.5
        Escreval("Preço da passagem: ", preco)
      Senao
        preco <- dist*0.45
        Escreval("Preço da passagem: ", preco)
      FimSe
fimalgoritmo
