algoritmo "semnome"
var
   pacotes, garrafas: INTEIRO
   gasto, litros, mls: REAL
inicio
      Escreva("Quantidade de pacotes de água durante o bloco de carnaval?: ")
      Leia(pacotes)
      garrafas <- pacotes * 12
      mls <- garrafas * 500
      litros <- mls / 1000
      gasto <- pacotes * 12
      Escreval("Litros de água consumidos: ", litros)
      Escreval("Gasto em água no evento: ", gasto)
fimalgoritmo
