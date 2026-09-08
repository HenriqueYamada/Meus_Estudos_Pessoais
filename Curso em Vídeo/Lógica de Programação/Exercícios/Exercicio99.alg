algoritmo "semnome"
//99) Faça um programa que possua uma função chamada Potencia(), que vai receber
//dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
//exponenciação.
//Ex: Potencia(5,2) vai calcular 5^2 = 25
var
   base, expo, potenc: REAL
   
Funcao Potencia(a, b: INTEIRO): REAL
Inicio
      Retorne a^b
FimFuncao

inicio
      Escreva("Digite a base: ")
      Leia(base)
      Escreva("Digite a potência: ")
      Leia(expo)
      potenc <- Potencia(base, expo)
      Escreval("A potência de ", base, "^", expo, " é de : ", potenc)
fimalgoritmo
