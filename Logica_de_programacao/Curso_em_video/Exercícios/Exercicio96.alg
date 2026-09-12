algoritmo "semnome"
//96) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
//um aluno e retornar a sua média para o programa principal.
var
   n1, n2, media_notas: REAL

Funcao Media(a, b: REAL): REAL
Inicio
      media_notas <- (n1+n2)/2
      Retorne media_notas
FimFuncao

inicio
      Escreva("Digite uma nota: ")
      Leia(n1)
      Escreva("Digite uma nota: ")
      Leia(n2)
      media_notas <- Media(n1, n2)
      Escreva("A média das notas é de: ", media_notas)
fimalgoritmo
