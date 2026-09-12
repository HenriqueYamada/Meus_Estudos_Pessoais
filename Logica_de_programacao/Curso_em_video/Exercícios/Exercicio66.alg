algoritmo "semnome"
//66) Escreva um programa que leia um número qualquer e mostre a tabuada desse
//número, usando a estrutura “para”.
//Ex: Digite um valor: 5
//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15 ...
var
   num, cont, result: INTEIRO
inicio
      Escreva("Digite um número: ")
      Leia(num)
      Para cont <- 1 ate 10 passo 1 faca
           result <- num*cont
           Escreval(num, " x ", cont, " = ", result)
      FimPara
fimalgoritmo
