algoritmo "exercicios"
//57) Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
//No final, mostre o total de salários pagos aos homens e o total pago às
//mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
//sempre que ler os dados de um funcionário.
var
   sal, totH, totF: REAL
   sexo, resp: CARACTERE
inicio
      Repita
            Escreva("Salário: R$")
            Leia(sal)
            Escreva("Sexo [M/F]: ")
            Leia(sexo)
            Se (sexo = "M") entao
               totH <- totH + sal
            Senao
                 totF <- totF + sal
            FimSe

            Escreva("Deseja continuar? [S/N]: ")
            Leia(resp)
            Escreval("-------------------------")
      Ate (resp = "N")
      
      Escreval("Salário total aos homens: R$", totH)
      Escreval("Salário total às mulheres: R$", totF)
fimalgoritmo
