algoritmo "semnome"
//87) Crie um programa que melhore o procedimento Gerador() da questão anterior
//para que mostre uma mensagem personalizada, passada como parâmetro.
//Ex: Ao chamar Gerador("Aprendendo Portugol") aparece:
//+-------=======------+
// Aprendendo Portugol
//+-------=======------+
var
   msg: CARACTERE

Procedimento gerador(msg_proc: CARACTERE)
Inicio
      Escreval("+-------=======------+")
      Escreval("", msg_proc, "")
      Escreval("+-------=======------+")
FimProcedimento
inicio
      Escreva("Digite uma mensagem: ")
      Leia(msg)
      gerador(msg)
fimalgoritmo
