algoritmo "semnome"
//77) Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
//final, mostre uma listagem com todos os nomes informados, na ordem inversa
//daquela em que eles foram informados.
var
   i: INTEIRO
   nome: CARACTERE
   vet: vetor[1..7] de CARACTERE
inicio
      Para i <- 1 ate 7 faca
           Escreva("Digite o seu nome: ")
           Leia(nome)
           vet[i] <- nome
      FimPara
      
      Escreval("=======================")
      Escreval("Nomes dos funcionários: ")
      
      Para i <- 7 ate 1 passo -1 faca
           Escreval(vet[i])
      FimPara
fimalgoritmo
