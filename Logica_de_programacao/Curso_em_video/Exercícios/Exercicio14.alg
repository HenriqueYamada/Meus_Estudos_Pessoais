algoritmo "Exercício09"
var
   km, pagar: REAL
   dias: INTEIRO
inicio
      Escreva("Km percorrido: ")
      Leia(km)
      Escreva("Dias usado: ")
      Leia(dias)
      pagar <- dias*90 + km*0.2
      Escreva("Total a pagar: R$", pagar)
fimalgoritmo
