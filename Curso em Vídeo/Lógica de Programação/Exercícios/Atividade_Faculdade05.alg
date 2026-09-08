algoritmo "semnome"
var
   sal_fixo, vendas, percentual, tot_vendas, tot_salario: REAL
inicio
      Escreva("Salário fixo: ")
      Leia(sal_fixo)
      Escreva("Quantidade de vendas: ")
      Leia(vendas)
      Escreva("Percentual que recebe sobre o total de vendas: ")
      Leia(percentual)
      tot_vendas <- vendas*percentual/100
      tot_salario <- sal_fixo + tot_vendas
      Escreva("Seu salário total é de R$", tot_salario)
fimalgoritmo
