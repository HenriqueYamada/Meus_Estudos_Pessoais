algoritmo "semnome"
//91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Maior() que vai verificar qual deles é o maior e
//mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
//informando essa característica.
var
   n1, n2, n3, num_maior: INTEIRO
   
Funcao Maior(a, b, c: INTEIRO) : INTEIRO
Inicio
      Se ((a > b) e (a > c)) entao
         Retorne a
      Senao
           Se ((b > a) e (b > c)) entao
              Retorne b
           Senao
                Se ((c > a) e (c > b)) entao
                   Retorne c
                Senao
                     Retorne ("Os números ", a, ", ", b, " e ", c, " são iguais")
                FimSe
           FimSe
      FimSe
FimFuncao

inicio
      Escreva("Digite um número: ")
      Leia(n1)
      Escreva("Digite outro número: ")
      Leia(n2)
      Escreva("Digite outro número: ")
      Leia(n3)
      num_maior <- Maior(n1, n2, n3)
      Escreval("O maior número é o: ", num_maior)
fimalgoritmo
