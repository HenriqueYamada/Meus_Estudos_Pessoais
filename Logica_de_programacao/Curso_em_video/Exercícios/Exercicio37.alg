algoritmo "exercicios"
var
   sal_atual, novo_sal: REAL
   anos: INTEIRO
   sexo: CARACTERE
inicio
      Escreva("Salário atual: R$")
      Leia(sal_atual)
      Escreva("sexo (masc/fem): ")
      Leia(sexo)
      Escreva("Anos trabalhados: ")
      Leia(anos)
      Se (sexo = "fem") entao
         Se (anos < 15) entao
            novo_sal <- sal_atual + sal_atual*0.05
         Senao
              Se ((anos >= 15) e (anos < 20)) entao
                 novo_sal <- sal_atual + sal_atual*0.12
              Senao
                   novo_sal <- sal_atual + sal_atual*0.23
              FimSe
         FimSe
      Senao
           Se (anos < 20) entao
              novo_sal <- sal_atual + sal_atual*0.03
           Senao
                Se ((anos >= 20) e (anos < 30)) entao
                   novo_sal <- sal_atual + sal_atual*0.13
                Senao
                     novo_sal <- sal_atual + sal_atual*0.25
                FimSe
           FimSe
      FimSe
      
      Escreval("Seu novo salário é de R$", novo_sal)
fimalgoritmo
