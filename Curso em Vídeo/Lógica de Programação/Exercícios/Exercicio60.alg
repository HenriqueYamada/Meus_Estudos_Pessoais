algoritmo "semnome"
//60) Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
//O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
//a) O nome da pessoa mais velha
//b) O nome da mulher mais jovem
//c) A média de idade do grupo
//d) Quantos homens tem mais de 30 anos
//e) Quantas mulheres tem menos de 18 anos
var
   media: REAL
   cont, idade, soma_idades, maior_idade, homens_acima_30, mulheres_abaixo_18, idade_mulher_jovem: INTEIRO
   nome, pessoa_velha, mulher_jovem, sexo, resp: CARACTERE
inicio
      idade_mulher_jovem <- 1000

      Repita
            Escreva("Nome: ")
            Leia(nome)
            Escreva("Idade: ")
            Leia(idade)
            Escreva("Sexo [M/F]: ")
            Leia(sexo)
            
            //Passo A)
      
            Se (idade > maior_idade) entao
               pessoa_velha <- nome
            FimSe
            
            //Passo B) e D)
            
            Se (sexo = "F") entao
               Se (idade < idade_mulher_jovem) entao
                  idade_mulher_jovem <- idade
                  mulher_jovem <- nome
               FimSe
            Senao
                 Se (idade > 30) entao
                    homens_acima_30 <- homens_acima_30 + 1
                 FimSe
            FimSe
            
            //Passo C)
            
            soma_idades <- soma_idades + idade
            
            //Passo E)
            
            Se (sexo = "F") entao
               Se (idade < 18) entao
                  mulheres_abaixo_18 <- mulheres_abaixo_18 + 1
               FimSe
            FimSe
      
            cont <- cont + 1
            Escreva("Gostaria de continuar? [S/N]: ")
            Leia(resp)
            Escreval("-----------------------------")
      Ate (resp = "N")
      
      media <- soma_idades/cont
      
      Escreval("A)Pessoa mais velha: ", pessoa_velha)
      Escreval("B)Mulher mais jovem: ", mulher_jovem)
      Escreval("C)Média de idade geral: ", media)
      Escreval("D)Homens acima de 30 anos: ", homens_acima_30)
      Escreval("E)Mulheres abaixo de 18 anos: ", mulheres_abaixo_18)
fimalgoritmo
