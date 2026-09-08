algoritmo "semnome"
//67) Faça um programa usando a estrutura “para” que leia um número inteiro
//positivo e mostre na tela uma contagem de 0 até o valor digitado:
//Ex: Digite um valor: 9
//Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
var
   num, cont, result: INTEIRO
inicio
      Escreva("Digite um número: ")
      Leia(num)
      Para cont <- 1 ate num passo 1 faca
           Escreva(cont, ",")
      FimPara
      Escreva(" FIM! ")
fimalgoritmo
