algoritmo "exercicios"
var
   din: REAL
   hrs, pts: INTEIRO
inicio
      Escreva("Horas treinadas: ")
      Leia(hrs)
      Se (hrs < 10) entao
         pts <- hrs*2
      Senao
           Se ((hrs >= 10) e (hrs < 20)) entao
              pts <- hrs*5
           Senao
                pts <- hrs*10
           FimSe
      FimSe
      
      din <- pts*0.05
      Escreva("Você ganhou R$", din)
fimalgoritmo
