algoritmo "exercicios"
var
   nome: CARACTERE
   salario, novo_salario: REAL
   anos: INTEIRO
inicio
      Escreva("Nome: ")
      Leia(nome)
      Escreva("Salário: R$")
      Leia(salario)
      Escreva("Anos de empresa: ")
      Leia(anos)
      Se (anos < 3) entao
         novo_salario <- salario + salario*3/100
         EscrevaL("O novo salário de ", nome, " é de R$", novo_salario)
      Senao
           Se (anos >= 3) e (anos < 10)  entao
              novo_salario <- salario + salario*12.5/100
              EscrevaL("O novo salário de ", nome, " é de R$", novo_salario)
           Senao
              novo_salario <- salario + salario*20/100
              EscrevaL("O novo salário de ", nome, " é de R$", novo_salario)
           FimSe
      FimSe
fimalgoritmo
