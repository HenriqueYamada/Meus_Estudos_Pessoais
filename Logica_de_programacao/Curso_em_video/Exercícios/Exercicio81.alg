algoritmo "semnome"
//81) Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
//final, mostre:
//a) Qual é a média de idade das pessoas cadastradas
//b) Em quais posições temos pessoas com mais de 25 anos
//c) Qual foi a maior idade digitada (podem haver repetições)
//d) Em que posições digitamos a maior idade

var
   media: REAL
   i, idade, soma_idade, maior_idade, qntd_maior_idade, posic_maior_num: INTEIRO
   vet: vetor[1..8] de INTEIRO
inicio
      maior_idade <- 0
      Para i <- 1 ate 8 faca
           Escreva("Digite a idade: ")
           Leia(idade)
           vet[i] <- idade
           soma_idade <- soma_idade + idade
           
           Se (idade > maior_idade) entao
              maior_idade <- idade
              posic_maior_num <- i
           FimSe
      FimPara
      
      Para i <- 1 ate 8 faca
           Se (vet[i] = maior_idade) entao
              qntd_maior_idade <- qntd_maior_idade + 1
           FimSe
      FimPara
      
      media <- soma_idade/8
      
      Escreval("A) Média de idade: ", media)
      Escreva("B) Posições de pessoas acima de 25 anos: ")
      Para i <- 1 ate 8 faca
           Se (vet[i] > 25) entao
              Escreva(i, ",")
           FimSe
      FimPara
      Escreval(" Fim!")
      Escreval("C) Maior idade digitada: ", maior_idade, " (", qntd_maior_idade, " vez(es))")
      Escreval("D) Posição da maior idade: ", posic_maior_num)
fimalgoritmo
