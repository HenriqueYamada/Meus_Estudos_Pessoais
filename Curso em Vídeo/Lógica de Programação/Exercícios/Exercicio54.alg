algoritmo "semnome"
//53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
//a) Quantos homens foram cadastrados
//b) Quantas mulheres foram cadastradas
//c) A média de idade do grupo
//d) A média de idade dos homens
//e) Quantas mulheres tem mais de 20 anos
var
   altura, soma_altura, media_altura, peso: REAL
   cont, mais90kg, pessoa_pequena, pessoa_grande: INTEIRO
inicio
      cont <- 1
      Enquanto (cont <= 7) faca
               Escreval("--------")
               Escreva("Altura: ")
               Leia(altura)
               Escreva("Peso: ")
               Leia(peso)
               
               Se (peso > 90) entao
                  mais90kg <- mais90kg + 1
               FimSe
               
               Se ((peso < 50) e (altura < 1.6)) entao
                  pessoa_pequena <- pessoa_pequena + 1
               FimSe
               
               Se ((altura > 1.9) e (peso > 100)) entao
                  pessoa_grande <- pessoa_grande + 1
               FimSe
               
               soma_altura <- soma_altura + altura
               cont <- cont + 1
      FimEnquanto

      media_altura <- soma_altura/7

      Escreval("A) Média de altura: ", media_altura)
      Escreval("B) Mais de 90kg: ", mais90kg)
      Escreval("C) Menos de 50kg e menos de 1.60m: ", pessoa_pequena)
      Escreval("D) Mais de 1.90 e mais de 100kg: ", pessoa_grande)
fimalgoritmo
