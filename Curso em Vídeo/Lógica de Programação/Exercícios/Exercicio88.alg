algoritmo "semnome"
//88) Crie um programa que melhore o procedimento Gerador() da questão anterior
//para que mostre uma mensagem vário
//Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece:
//+-------=======------+
// Aprendendo Portugol
// Aprendendo Portugol
// Aprendendo Portugol
// Aprendendo Portugol
//+-------=======------+
var
   qntd_vezes: INTEIRO
   msg: CARACTERE
Procedimento gerador(msg_proc: CARACTERE; qntd_vezes_proc: INTEIRO)
var
   cont: INTEIRO
Inicio
      Escreval("+-------=======------+")
      Para cont <- 1 ate qntd_vezes_proc passo 1 faca
           Escreval("Aprendendo Portugol", cont)
      FimPara
      Escreval("+-------=======------+")
FimProcedimento
inicio
      Escreva("Escreva uma mensagem: ")
      Leia(msg)
      Escreva("Quantas vezes aparecerá?: ")
      Leia(qntd_vezes)
      gerador(msg, qntd_vezes)
fimalgoritmo
