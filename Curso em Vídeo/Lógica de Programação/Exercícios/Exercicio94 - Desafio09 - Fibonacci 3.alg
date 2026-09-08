algoritmo "semnome"
//94) [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado
//Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
//termos da sequência serão mostrados na tela. O seu procedimento deve receber
//esse valor e mostrar a quantidade de elementos solicitados.
//Obs: Use os exercícios 70 e 75 para te ajudar na solução
//Ex:
//Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
//Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM
var
   qntd_termos: INTEIRO
   
Procedimento Fibonacci(qntd_termos_proc: INTEIRO)
Var
   cont, t1, t2, t3: INTEIRO
Inicio
      t1 <- 0
      t2 <- 1
      t3 <- 1
      Para cont <- 1 ate qntd_termos_proc passo 1 faca
           Escreva(t1," >> ")
           t1 <- t2
           t2 <- t3
           t3 <- t1 + t2
      FimPara
      Escreval(" FIM")
FimProcedimento

inicio
      Escreva("Quantos números da sequência de Fibonacci você gostaria de ver?: ")
      Leia(qntd_termos)
      Fibonacci(qntd_termos)
fimalgoritmo
