algoritmo "semnome"
var
   carro, tempo, velocidade, distancia, combustivel_gasto: REAL
inicio
      carro <- 12
      Escreva("Tempo gasto na viagem?: ")
      Leia(tempo)
      Escreva("Velocidade média do carro: ")
      Leia(velocidade)
      distancia <- tempo * velocidade
      combustivel_gasto <- distancia/12
      Escreva("Quantidade gasta do veículo: ", combustivel_gasto)
fimalgoritmo
