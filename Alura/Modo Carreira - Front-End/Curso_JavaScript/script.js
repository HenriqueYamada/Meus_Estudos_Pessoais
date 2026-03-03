// Tipos de variáveis:
// 1 - Variável Global: apenas redefine o valor da variável

idade1 = 18 //- daria erro se estivesse sem o 1 pois estou mudando o valor de uma varável que não existe, pois será criada na linha 14
console.log('1 - Idade: ', idade1)

// 2 - Var: Muda todas os valores das variáveis de mesmo nome do seu código inteiro!

var idade2 = 18
console.log('2 - Idade: ', idade2)

// 3 - Let: O mais recomendado, pois ele altera a variável que estiver no  mesmo bloco

let idade3 = 18
console.log('3 - Idade: ', idade3)

// 4 - Const: O valor da contante nunca será mudada

const idade4 = 18
console.log('4 - idade: ', idade4)