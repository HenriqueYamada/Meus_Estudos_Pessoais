algoritmo "semnome"
//85) Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
//guarde esses dados em três vetores. No final, mostre uma listagem contendo
//apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

var
   salario: REAL
   i, idade: INTEIRO
   nome, sexo: CARACTERE
   vet_nome: vetor[1..9] de CARACTERE
   vet_sexo: vetor[1..9] de CARACTERE
   vet_salario: vetor[1..9] de REAL
inicio
      Para i <- 1 ate 3 faca
           Escreva("Nome: ")
           Leia(nome)
           Escreva("Sexo [H/M]: ")
           Leia(sexo)
           Escreva("Salário: R$")
           Leia(salario)
           Escreval("============")
           vet_nome[i] <- nome
           vet_sexo[i] <- sexo
           vet_salario[i] <- salario
      FimPara

      Escreval("Dados das mulheres que ganham acima de R$5000: ")
      
      Para i <- 1 ate 3 faca
           Se (vet_sexo[i] = "M") entao
              Se (vet_salario[i] > 5000) entao
                 Escreval("==============================")
                 Escreval("Nome: ", vet_nome[i])
                 Escreval("Salário: R$", vet_salario[i])
              FimSe
           FimSe
      FimPara
fimalgoritmo
