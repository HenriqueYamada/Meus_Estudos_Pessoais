algoritmo "exercicios"
var
   alt, peso, imc: REAL
inicio
      Escreva("Altura: ")
      Leia(alt)
      Escreva("Peso: ")
      Leia(peso)
      imc <- peso/(alt^2)
      Se (imc < 18.5) entao
         Escreval("Abaixo de 18.5: Abaixo do peso")
      Senao
           Se ((imc >= 18.5) e (imc < 25)) entao
              Escreval("Entre 18.5 e 25: Peso ideal")
           Senao
                Se ((imc >= 25) e (imc < 30)) entao
                   Escreval("Entre 25 e 30: Sobrepeso")
                Senao
                     Se ((imc >= 30) e (imc < 40)) entao
                        Escreval("Entre 30 e 40: Obesidade")
                     Senao
                          Escreval("Acima de 40: Obseidade mórbida")
                     FimSe
                FimSe
           FimSe
      FimSe
fimalgoritmo
