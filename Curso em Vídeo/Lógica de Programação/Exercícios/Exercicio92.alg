algoritmo "semnome"
//92) Crie uma lógica que leia um número inteiro e passe para um procedimento
//ParOuImpar() que vai verificar e mostrar na tela se o valor passado como
//parâmetro é PAR ou ÍMPAR.
var
   num: INTEIRO
   
Procedimento ParOuImpar(num_proc: INTEIRO)
Inicio
      Se (num_proc % 2 = 0) entao
         Escreval("O número ", num_proc, " é par")
      Senao
         Escreval("O número ", num_proc, " é ímpar")
      FimSe
FimProcedimento

inicio
      Escreva("Digite um número: ")
      Leia(num)
      ParOuImpar(num)
fimalgoritmo
