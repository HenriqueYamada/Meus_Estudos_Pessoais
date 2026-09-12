algoritmo "atividade01"
var
   nome: CARACTERE
   n1, n2, media: REAL
inicio
      Escreva("Nome: ")
      Leia(nome)
      Escreva("Nota 1: ")
      Leia(n1)
      Escreva("Nota 2: ")
      Leia(n2)
      media <- (n1 + n2)/2
      Se (media > 7) entao
         Escreva("Parabéns ", nome, "! Você teve um bom aproveitamento")
      Senao
         Escreva("Que pena ", nome, ". Você não teve um bom aproveitamento")
      FimSe
fimalgoritmo
