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
   qntd_vezes, resp: INTEIRO
   msg: CARACTERE
Procedimento gerador(msg_proc: CARACTERE; qntd_vezes_proc, resp_proc: INTEIRO)
var
   cont: INTEIRO
Inicio
      Escolha resp_proc
              Caso 1
                   Escreval("+-------=======------+")
                   Para cont <- 1 ate qntd_vezes_proc passo 1 faca
                       Escreval(msg_proc, cont)
                   FimPara
                   Escreval("+-------=======------+")
                   
              Caso 2
                   Escreval("~~~~~~~~:::::::~~~~~~~")
                   Para cont <- 1 ate qntd_vezes_proc passo 1 faca
                       Escreval(msg_proc, cont)
                   FimPara
                   Escreval("~~~~~~~~:::::::~~~~~~~")
                   
              OutroCaso
                   Escreval("<<<<<<<<------->>>>>>>")
                   Para cont <- 1 ate qntd_vezes_proc passo 1 faca
                       Escreval(msg_proc, cont)
                   FimPara
                   Escreval("<<<<<<<<------->>>>>>>")
      FimEscolha
FimProcedimento
inicio
      Escreva("Escreva uma mensagem: ")
      Leia(msg)
      Escreva("Quantas vezes aparecerá?: ")
      Leia(qntd_vezes)
      Escreval("Qual modelo você quer escolher de borda?:")
      Escreval("Borda 1 +-------=======------+")
      Escreval("Borda 2 ~~~~~~~~:::::::~~~~~~~")
      Escreval("Borda 3 <<<<<<<<------->>>>>>>")
      Escreva("R: ")
      Leia(resp)
      gerador(msg, qntd_vezes, resp)
fimalgoritmo
