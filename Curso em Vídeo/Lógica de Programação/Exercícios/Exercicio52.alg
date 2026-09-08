algoritmo "semnome"
//2) Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
//a) Qual é a média de idade do grupo
//b) Quantas pessoas tem mais de 18 anos
//c) Quantas pessoas tem menos de 5 anos
//d) Qual foi a maior idade lida
var
   media: REAL
   cont, idade, soma, maioridade, menoridade, maior_idade: INTEIRO
inicio
      cont <- 1
      Enquanto (cont <= 5) faca
               Escreva(cont, "° idade: ")
               Leia(idade)
               
               soma <- soma + idade
               media <- soma/10
               
               Se (idade > 18) entao
                  maioridade <- maioridade + 1
                  
               Senao
                    Se (idade < 5) entao
                       menoridade <- menoridade + 1
                    FimSe
               FimSe
               
               Se (idade > maior_idade) entao
                  maior_idade <- idade
               FimSe
               
               cont <- cont + 1
      FimEnquanto
      Escreval("A) Média das idades: ", media)
      Escreval("B) Acima de 18 anos: ", maioridade)
      Escreval("C) Abaixo de 5 anos: ", menoridade)
      Escreval("D) Maior idade lida: ", maior_idade)
fimalgoritmo
