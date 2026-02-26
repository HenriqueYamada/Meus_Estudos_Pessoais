algoritmo "semnome"
//83) [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
//aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
//números gerados e depois coloque o vetor em ordem crescente, mostrando no final
//os valores ordenados.

var
   i, idade: INTEIRO
   nome: CARACTERE
   vet_nome: vetor[1..3] de CARACTERE
   vet_idade: vetor[1..3] de INTEIRO
inicio
      Para i <- 1 ate 3 faca
           Escreva("Nome: ")
           Leia(nome)
           Escreva("Idade: ")
           Leia(idade)
           Escreval("============")
           vet_nome[i] <- nome
           vet_idade[i] <- idade
      FimPara
      Escreval("====================================")
      Escreval("Dados das pessoas menores de idade: ")
      Para i <- 1 ate 3 faca
           Se (vet_idade[i] < 18) entao
              Escreval("==============================")
              Escreval("Nome: ", vet_nome[i])
              Escreval("Idade: ", vet_idade[i])
           FimSe
      FimPara
fimalgoritmo
