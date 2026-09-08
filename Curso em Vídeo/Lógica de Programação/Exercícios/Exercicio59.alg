algoritmo "exercicios"
//59) Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
//perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
//a) qual é a maior idade lida
//b) quantos homens foram cadastrados
//c) qual é a idade da mulher mais jovem
//d) qual é a média de idade entre os homens
var
   media_homens: REAL
   idade, maior_idade, homens, soma_homens, soma_idade_homens, mulher_jovem: INTEIRO
   sexo, resp: CARACTERE
inicio
      mulher_jovem <- 1000
      Repita
            Escreval("------------------------")
            Escreva("Sexo [M/F]: ")
            Leia(sexo)
            Escreva("Idade: ")
            Leia(idade)
            
            Se (idade > maior_idade) entao
               maior_idade <- idade
            FimSe
            
            Se (sexo = "M") entao
               soma_homens <- soma_homens + 1
               soma_idade_homens <- soma_idade_homens + idade
            FimSe
            
            Se (sexo = "F") entao
               Se (idade < mulher_jovem) entao
                  mulher_jovem <- idade
               FimSe
            FimSe

            Escreva("Deseja continuar? [S/N]: ")
            Leia(resp)
      Ate (resp = "N")
      
      media_homens <- soma_idade_homens/soma_homens
      
      Escreval("A)Maior idade lida: ", maior_idade)
      Escreval("B)Homens cadastrados: ", soma_homens)
      Escreval("C)Idade mulher mais jovem: ", mulher_jovem)
      Escreval("D)Média idade dos homens: ", media_homens)
fimalgoritmo
