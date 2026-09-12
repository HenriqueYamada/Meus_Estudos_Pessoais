algoritmo "semnome"
//99) Faça um programa que possua uma função chamada Potencia(), que vai receber
//dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
//exponenciação.
//Ex: Potencia(5,2) vai calcular 5^2 = 25
var
   comeco, fim, soma: INTEIRO
   
Funcao SuperSomador(a, b: INTEIRO): INTEIRO
Var
   cont, soma: INTEIRO
Inicio
      Para cont <- a ate b faca
           soma <- soma + cont
      FimPara

      Retorne soma
FimFuncao

inicio
      Escreva("Digite um número para começar: ")
      Leia(comeco)
      Escreva("Digite um número para terminar: ")
      Leia(fim)
      soma <- SuperSomador(comeco, fim)
      Escreval("A soma do intervalo entre ", comeco, " e ", fim, " é de : ", soma)
fimalgoritmo
