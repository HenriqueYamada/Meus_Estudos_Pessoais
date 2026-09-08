algoritmo "semnome"
var
   raio, area, volume: REAL
inicio
      Escreva("Raio da circunferência: ")
      Leia(raio)
      area <- 4*3.14*raio^2
      volume <- 4 * 3.14 * (raio^3) / 3
      Escreval("Área da esfera: ", area)
      Escreval("Volume da esfera: ", volume)
fimalgoritmo
