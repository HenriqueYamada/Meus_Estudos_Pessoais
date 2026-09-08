algoritmo "semnome"
//91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Maior() que vai verificar qual deles é o maior e
//mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
//informando essa característica.
var
   n1, n2: INTEIRO
   
Procedimento num_maior(n1_proc, n2_proc: INTEIRO)
Inicio
      Se (n1_proc > n2_proc) entao
         Escreval("O número ", n1_proc, " é maior que ", n2_proc)
      Senao
           Se (n1_proc < n2_proc) entao
              Escreval("O número ", n2_proc, " é maior que ", n1_proc)
           Senao
                Escreval("O número ", n1_proc, " e ", n2_proc, " são iguais")
           FimSe
      FimSe
FimProcedimento

inicio
      Escreva("Digite um número: ")
      Leia(n1)
      Escreva("Digite outro número: ")
      Leia(n2)
      num_maior(n1, n2)
fimalgoritmo
