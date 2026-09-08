algoritmo "exercicios"
//68) Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
//“para”. No final, mostre na tela:
//a) Quantas mulheres foram cadastradas
//b) Quantos homens pesam mais de 100Kg
//c) A média de peso entre as mulheres
//d) O maior peso entre os homens

var
   peso, peso_mulheres, media_peso_mulheres,maior_peso_homens: REAL
   cont, qntd_mulheres, homens_acima_100kg: INTEIRO
   sexo: CARACTERE
inicio
      Para cont <- 1 ate 8 passo 1 faca
           Escreva("Sexo: [M/F]: ")
           Leia(sexo)
           Escreva("Peso: ")
           Leia(peso)
           
           Se (sexo = "F") entao
              qntd_mulheres <- qntd_mulheres + 1
              peso_mulheres <- peso_mulheres + peso
           Senao
                Se (peso > 100) entao
                   homens_acima_100kg <- homens_acima_100kg + 1
                FimSe
                
                Se (peso > maior_peso_homens) entao
                   maior_peso_homens <- peso
                FimSe
           FimSe
           Escreval("-----------------------------")
      FimPara
      
      media_peso_mulheres <- peso_mulheres/8
      
      Escreval("Mulheres cadastradas: ", qntd_mulheres)
      Escreval("Homens acima de 100kg: ", homens_acima_100kg)
      Escreval("Média peso das mulheres: ", media_peso_mulheres)
      Escreval("Maior peso homens: ", maior_peso_homens)
fimalgoritmo
