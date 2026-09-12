algoritmo "exercicios"
var
   casa, sal, emprestimo, prestacao: REAL
   anos: INTEIRO
inicio
      Escreva("Empréstimo: R$")
      Leia(emprestimo)
      Escreva("Salário: R$")
      Leia(sal)
      Escreva("Anos a pagar: ")
      Leia(anos)
      prestacao <- emprestimo/(anos*12)
      Se (prestacao < sal*30/100) entao
         Escreval("Você pode fazer o empréstimo!")
      Senao
         Escreval("Você não pode fazer o empréstimo!")
      FimSe
fimalgoritmo
