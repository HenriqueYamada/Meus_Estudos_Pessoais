algoritmo "atividade01"
var
   ano_atual, ano_nasc, idade: INTEIRO
inicio
      Escreva("Ano atual: ")
      Leia(ano_atual)
      Escreva("Ano de nascimento: ")
      Leia(ano_nasc)
      idade <- ano_atual - ano_nasc
      Se (idade >= 18) entao
         Escreva("Você está apto para votar")
      Senao
         Escreva("Você está não apto para votar")
      FimSe
fimalgoritmo
