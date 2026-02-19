algoritmo "semnome"
//53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
//a) Quantos homens foram cadastrados
//b) Quantas mulheres foram cadastradas
//c) A média de idade do grupo
//d) A média de idade dos homens
//e) Quantas mulheres tem mais de 20 anos
var
   media, media_homens: REAL
   cont, idade, soma, soma_homens, soma_mulheres, homens, mulheres, mulheres_acima_20: INTEIRO
   sexo: CARACTERE
inicio
      cont <- 1
      Enquanto (cont <= 5) faca
               Escreval("--------")
               Escreva("Idade: ")
               Leia(idade)
               Escreva("Sexo [masc/fem]: ")
               Leia(sexo)
               
               Se (sexo = "masc") entao
                  soma_homens <- soma_homens + idade
                  homens <- homens + 1
               Senao
                    mulheres <- mulheres + 1
               FimSe
               
               Se ((sexo = "fem") e (idade > 20)) entao
                  mulheres_acima_20 <- mulheres_acima_20 + 1
               FimSe
               soma <- soma + idade
               cont <- cont + 1
      FimEnquanto
      
      media <- soma/5
      media_homens <- soma_homens/homens
      
      Escreval("A) Homens cadastrados: ", homens)
      Escreval("B) Mulheres cadastrados: ", mulheres)
      Escreval("C) Média idade geral: ", media)
      Escreval("D) Média idade homens: ", media_homens)
      Escreval("E) Mulheres acima de 20 anos: ", mulheres_acima_20)
fimalgoritmo
