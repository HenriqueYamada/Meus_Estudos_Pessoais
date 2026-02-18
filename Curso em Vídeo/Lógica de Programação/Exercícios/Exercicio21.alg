algoritmo "exercicios"
var
   ano: INTEIRO
inicio
      Escreva("Ano atual: ")
      Leia(ano)
      Se ((ano % 4 = 0) e (ano % 100 <> 0)) ou (ano % 400 = 0) entao
           Escreval("O ano ", ano, " é bissexto")
      Senao
           Escreval("O ano ", ano, " não é bissexto")
      FimSe
fimalgoritmo
