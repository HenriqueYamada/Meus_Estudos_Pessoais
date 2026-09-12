algoritmo "exercicios"
var
   total, kms: REAL
   dias: INTEIRO
   car: CARACTERE
inicio
      Escreva("Carro alugado é POPULAR ou LUXO: ")
      Leia(car)
      Escreva("Dias alugados: ")
      Leia(dias)
      Escreva("Kms percorridos: ")
      Leia(kms)
      Se (car = "popular") entao
         Se (kms < 100) entao
            total <- dias*90 + kms*0.2
         Senao
              total <- dias*90 + kms*0.1
         FimSe)
      Senao
           Se (car = "luxo") entao
              Se (kms < 200) entao
                 total <- dias*150 + kms*0.3
              Senao
                 total <- dias*150 + kms*0.25
              FimSe
           FimSe
      FimSe
      
      Escreval("Total a pagar: ", total)
fimalgoritmo
