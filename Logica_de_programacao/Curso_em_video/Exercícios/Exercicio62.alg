algoritmo "semnome"
//62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de
//várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
//não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
//na tela:
//a) Quantas idades foram digitadas
//b) Qual é a média entre as idades digitadas
//c) Quantas pessoas tem 21 anos ou mais.
var
   media: REAL
   CONT, idade, soma_idade, maior_21: INTEIRO
   resp: CARACTERE
inicio
      Repita
            Escreva("Idade: ")
            Leia(idade)
            soma_idade <- soma_idade + idade
            Se (idade >= 21) entao
               maior_21 <- maior_21 + 1
            FimSe
            Escreva("Deseja continuar? [S/N]: ")
            Leia(resp)
            Escreval("------------------------")
            cont <- cont + 1
      Ate (resp = "N")
      media <- soma_idade/cont
      Escreval("Idades digitadas: ", cont)
      Escreval("Média das idades: ", media)
      Escreval("Maior de 21 anos: ", maior_21)
fimalgoritmo
