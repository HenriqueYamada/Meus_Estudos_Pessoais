algoritmo "Desafio01"
var
   perda_vida_min, perda_vida_dias: REAL
   qntd_cigarros, anos: INTEIRO
inicio
      Escreva("Cigarros por dia: ")
      Leia(qntd_cigarros)
      Escreva("A quantos anos você fuma?: ")
      Leia(anos)
      perda_vida_min <- qntd_cigarros*10*365*anos
      perda_vida_dias <- perda_vida_min/(60*24)
      Escreva("A quantidade de dias perdido é de ", perda_vida_dias)
fimalgoritmo
