algoritmo "exercicios"
//56) Crie um programa que leia vários números pelo teclado e mostre no final o somatório entre eles.
//Obs: O programa será interrompido quando o número 1111 for digitado
var
   num, soma: INTEIRO
inicio
      Repita
            Escreva("Digite um número [aperte 1111 para sair]: ")
            Leia(num)
            soma <- soma + num
      Ate (num = 1111)
      Escreval("A soma dos números é de ", soma-1111)
fimalgoritmo
