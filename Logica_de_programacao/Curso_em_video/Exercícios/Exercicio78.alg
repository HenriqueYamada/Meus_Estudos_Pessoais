algoritmo "semnome"
//78) Escreva um programa que leia 15 números e guarde-os em um vetor. No final,
//mostre o vetor inteiro na tela e em seguida mostre em que posições foram
//digitados valores que são múltiplos de 10.
var
   i, num: INTEIRO
   vet_nums: vetor[1..5] de INTEIRO
inicio
      Para i <- 1 ate 5 faca
           Escreva("Digite um número: ")
           Leia(num)
           vet_nums[i] <- num
      FimPara

      Escreval("------------------")
      Escreval("Todos os vetores: ")

      Para i <- 1 ate 5 faca
           Escreval(vet_nums[i])
      FimPara
      
      Escreval("------------------")
      Escreval("Os valores múltiplos de 10 estão nas posições: ")
      
      Para i <- 1 ate 5 faca
           Se (vet_nums[i] % 10 = 0) entao
              Escreval(i)
           FimSe
      FimPara
fimalgoritmo
