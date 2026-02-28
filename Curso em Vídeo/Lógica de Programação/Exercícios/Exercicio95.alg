algoritmo "semnome"
//95) Refaça o exercício 90, só que agora em forma de função Somador(), que vai
//receber dois parâmetros e vai retornar o resultado da soma entre eles para o
//programa principal.
var
   n1, n2, soma: INTEIRO

Funcao Somador(a, b: INTEIRO): INTEIRO
Inicio
      Retorne a + b
FimFuncao

inicio
      Escreva("Digite um número: ")
      Leia(n1)
      Escreva("Digite um número: ")
      Leia(n2)
      soma <- Somador(n1, n2)
      Escreval("A soma entre ", n1, " e ", n2, " é igual a ", soma)
fimalgoritmo
