algoritmo "semnome"
//90) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Somador() que vai calcular e mostrar a soma entre
//eles.
var
   n1, n2: INTEIRO
   
Procedimento somador(n1_proc, n2_proc: INTEIRO)
var
   soma: INTEIRO
Inicio
   soma <- n1 + n2
   Escreval("A soma dos dois números é de", soma)
FimProcedimento

inicio
      Escreva("Digite um número: ")
      Leia(n1)
      Escreva("Digite outro número: ")
      Leia(n2)
      somador(n1, n2)
fimalgoritmo
