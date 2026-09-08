algoritmo "atividade01"
var
   veloc, multa: REAL
inicio
      Escreva("Velocidade do carro: ")
      Leia(veloc)
      Se (Veloc > 80) entao
         multa <- (veloc - 80)*5
         EscrevaL("Você foi multado e terá que pagar R$", multa)
      Senao
           EscrevaL("Você não foi multado")
      FimSe
fimalgoritmo
