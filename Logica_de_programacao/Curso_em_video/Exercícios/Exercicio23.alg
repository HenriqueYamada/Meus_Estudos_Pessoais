algoritmo "exercicios"
var
   nome, sexo: CARACTERE
   compras, desconto: REAL
inicio
      Escreva("Nome: ")
      Leia(nome)
      Escreva("Sexo (masc/fem): ")
      Leia(sexo)
      Escreva("Preço das compras: ")
      Leia(compras)
      Se (sexo = "masc") entao
         desconto <- compras - compras*5/100
         Escreval(nome," pagará o total de R$", desconto)
      Senao
         desconto <- compras - compras*13/100
         Escreval(nome, " pagará o total de R$", desconto)
      FimSe
fimalgoritmo
