algoritmo "semnome"
//51) Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela qual foi o maior e qual foi o menor preço digitados.
var
   cont: INTEIRO
   preco, maior_preco, menor_preco: REAL
inicio
      cont <- 1
      menor_preco <- 10000
      Enquanto (cont <= 8) faca
               Escreva("Preço do produto: R$")
               Leia(preco)
               Se (preco > maior_preco) entao
                  maior_preco <- preco
               FimSe
               Se (preco < menor_preco) entao
                  menor_preco <- preco
               FimSe
               cont <- cont + 1
      FimEnquanto
      
      Escreval("Maior preço: R$", maior_preco)
      Escreval("Menor preço: R$", menor_preco)
fimalgoritmo
