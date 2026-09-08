algoritmo "semnome"
var
   valor_hora, horas_trabalhadas, percentual_INSS, sal_bruto, desconto, sal_liquido: REAL
inicio
      Escreva("Valor da hora aula: ")
      Leia(valor_hora)
      Escreva("Número de horas trabalhadas no mês: ")
      Leia(horas_trabalhadas)
      Escreva("Percentual de desconto INSS: ")
      Leia(percentual_INSS)
      sal_bruto <- valor_hora*horas_trabalhadas
      desconto <- sal_bruto*percentual_INSS/100
      sal_liquido <- sal_bruto - desconto
      Escreval("O salário líquido é de R$", sal_liquido)
fimalgoritmo
