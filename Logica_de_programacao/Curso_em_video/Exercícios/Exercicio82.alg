algoritmo "semnome"
//81) Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
//final, mostre:
//a) Qual é a média de idade das pessoas cadastradas
//b) Em quais posições temos pessoas com mais de 25 anos
//c) Qual foi a maior idade digitada (podem haver repetições)
//d) Em que posições digitamos a maior idade

var
   nota, maior_nota, soma_nota, media: REAL
   i, qntd_maior_nota_media: INTEIRO
   vet: vetor[1..10] de REAL
inicio
      maior_nota <- 0
      Para i <- 1 ate 10 faca
           Escreva("Digite a nota: ")
           Leia(nota)
           vet[i] <- nota
           soma_nota <- soma_nota + nota
           
           Se (nota > maior_nota) entao
              maior_nota <- nota
           FimSe
      FimPara
      
      media <- soma_nota/10
      
      Para i <- 1 ate 10 faca
           Se (vet[i] > media) entao
              qntd_maior_nota_media <- qntd_maior_nota_media + 1
           FimSe
      FimPara
      
      Escreval("A) Média de nota: ", media)
      Escreval("B) Quantidade maior nota em relação à media: ", qntd_maior_nota_media)
      Escreval("C) Maior nota digitada: ", maior_nota)
      Escreva("D) Posição da maior nota: ")
      Para i <- 1 ate 10 faca
            Se (vet[i] = maior_nota) entao
               Escreva(i)
           FimSe
      FimPara
fimalgoritmo
