algoritmo "exercicios"
var
   p1, p2: CARACTERE
inicio
      Escreval("-------------------------------------")
      Escreval("            JOGAR JOKENPO            ")
      Escreval("ESCOLHA ENTRE PEDRA / PAPEL / TESOURA")
      Escreval("-------------------------------------")
      Escreva("Jogador 1: ")
      Leia(p1)
      Escreva("Jogador 2: ")
      Leia(p2)
      Escreval("")
      
      Se ((p1 = "pedra") e (p2 = "tesoura")) entao
         Escreval("Jogador 1 ganhou!")
      Senao
           Se ((p1 = "papel") e (p2 = "pedra")) entao
              Escreval("Jogador 1 ganhou!")
              Senao
                   Se ((p1 = "tesoura") e (p2 = "papel")) entao
                      Escreval("Jogador 1 ganhou!")
                   Senao
                        Se (((p1 = "pedra") e (p2 = "pedra")) ou ((p1 = "papel") e (p2 = "papel")) ou ((p1 = "tesoura") e (p2 = "tesoura"))) entao
                           Escreval("Empate!")
                        Senao
                             Escreval("O jogador 2 ganhou!")
                        FimSe
                   FimSe
           FimSe
      FimSe
fimalgoritmo
