algoritmo "semnome"
//93) Faça um programa que tenha um procedimento chamado Contador() que recebe
//três valores como parâmetro: o início, o fim e o incremento de uma contagem. O
//programa principal deve solicitar a digitação desses valores e passá-los ao
//procedimento, que vai mostrar a contagem na tela.
//Ex: Para os valores de início (4), fim (20) e incremento(3) teremos
//Contador(4, 20, 3) vai mostrar na tela 4 >> 7 >> 10 >> 13 >> 16 >> 19 >> FIM
var
   comeco, fim, incr: INTEIRO
   
Procedimento Contador(comeco_proc, fim_proc, incr_proc: INTEIRO)
var
   cont: INTEIRO
Inicio
      Escreval("Para os valores de início (", comeco_proc ,"), fim (", fim_proc ,") e incremento(", incr_proc ,") teremos")
      Para cont <- 1 ate fim_proc passo incr_proc faca
           Escreva(comeco_proc, " >> ")
           comeco_proc <- comeco_proc + incr_proc
      FimPara
      Escreval(" FIM ")
FimProcedimento
inicio
      Escreva("Valor de comeco: ")
      Leia(comeco)
      Escreva("Valor de fim: ")
      Leia(fim)
      Escreva("Valor de incremento: ")
      Leia(incr)
      Contador(comeco, fim, incr)
fimalgoritmo
