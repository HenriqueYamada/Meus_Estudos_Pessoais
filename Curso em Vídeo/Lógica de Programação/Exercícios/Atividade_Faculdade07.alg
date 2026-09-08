algoritmo "semnome"
var
   salario, gratificacao, imposto, salario_final: REAL
inicio
      Escreva("Salário: ")
      Leia(salario)
      gratificacao <- salario*5/100
      imposto <- salario*10/100
      salario_final <- salario + gratificacao - imposto
      Escreval("Seu salário final é: R$", salario_final)
fimalgoritmo
