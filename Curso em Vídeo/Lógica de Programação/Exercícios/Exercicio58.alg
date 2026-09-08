algoritmo "exercicios"
//58) Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
//vai parar quando for digitada a idade 999. No final, mostre quantos alunos
//existem na turma e qual é a média de idade do grupo.
var
   media: REAL
   cont, idade, soma: INTEIRO
inicio
      cont <- 1
      Repita
            Escreval("-----------------------------------------------------------")
            Escreva("Qual a idade do ", cont, "° aluno? [Digite 999 para sair]: ")
            Leia(idade)
            soma <- soma + idade
            cont <- cont + 1
      Ate (idade = 999)
      media <- (soma-999)/(cont-2)
      Escreval("O número total de alunos é de ", cont-2, " e a média das idades é de ", media)
fimalgoritmo
