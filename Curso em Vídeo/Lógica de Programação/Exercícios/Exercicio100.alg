algoritmo "semnome"
//100) Melhore o exercício 96, criando além da função Media() uma outra função
//chamada Situacao(), que vai retornar para o programa principal se o aluno está
//APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como
//parâmetro o resultado retornado pela função Media().
var
   n1, n2, media_notas: REAL
   situacao_aluno: CARACTERE

Funcao Media(a, b: REAL): REAL
Inicio
      media_notas <- (n1+n2)/2
      Retorne media_notas
FimFuncao

Funcao Situacao(media_notas: REAL): CARACTERE
Inicio
      Se (media_notas >= 7) entao
         Retorne "APROVADO"
      Senao
           Se ((media_notas >= 4) e (media_notas < 7)) entao
              Retorne "RECUPERAÇÃO"
           Senao
                Retorne "REPROVADO"
           FimSe
      FimSe
FimFuncao

inicio
      Escreva("Digite uma nota: ")
      Leia(n1)
      Escreva("Digite uma nota: ")
      Leia(n2)
      media_notas <- Media(n1, n2)
      situacao_aluno <- Situacao(media_notas)
      Escreval("A média das notas é de: ", media_notas)
      Escreval("A situação do aluno é: ", situacao_aluno)
fimalgoritmo
