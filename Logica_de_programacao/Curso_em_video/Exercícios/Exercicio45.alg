algoritmo "semnome"
var
   inic, fim, incr: INTEIRO
inicio
      Escreva("Digite o primeiro Valor: ")
      Leia(inic)
      Escreva("Digite o último Valor: ")
      Leia(fim)
      Escreva("Digite o incremento: ")
      Leia(incr)
      Se (inic <= fim) entao
         Enquanto (inic <= fim) faca
                  Escreva(inic ," ")
                  inic <- inic + incr
         FimEnquanto
      Senao
        Enquanto (fim <= inic) faca
               Escreva(fim ," ")
               fim <- fim + incr
         FimEnquanto
      FimSe


      Escreva("Acabou!")
fimalgoritmo
