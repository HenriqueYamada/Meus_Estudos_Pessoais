/*Você está desenvolvendo um sistema de controle de acesso para um evento. Para entrar, a pessoa precisa ter 18 anos ou mais.

Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem informando se o acesso foi ou não permitido.*/

let idade = 17

if (idade >= 18) {
    console.log('Acesso permitido')
} else {
    console.log('Acesso negado')
}

/*Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:

Menor que 15: "Frio"
De 15 a 25: "Agradável"
Acima de 25: "Quente"
Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente.*/

const temperatura = 28

if (temperatura < 15) {
    console.log("Frio")
} else if (temperatura >= 15 && temperatura <= 25) {
    console.log("Agradável")
} else {
    console.log("Quente")
}

/*Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas etárias. As regras são:

Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".
Crie um programa que, dado o valor da idade, classifique a pessoa na categoria correspondente.*/

idade = 2

if (idade >= 18) {
    console.log('Adulto')
} else if (idade >= 12) {
    console.log('Juvenil')
} else {
    console.log('Infantil')
}

/*Você está desenvolvendo um sistema para controlar o horário de funcionamento de uma loja. Durante a semana, a loja abre das 9h às 18h, mas aos sábados e domingos, ela abre em horário especial, das 10h às 14h.

Crie um programa que, dado o dia da semana em formato numérico:

0: Domingo
1: Segunda-feira
2: Terça-feira
3: Quarta-feira
4: Quinta-feira
5: Sexta-feira
6: Sábado
Verifique se a loja está aberta e qual o horário de funcionamento.

Se for sábado (6) ou domingo (0), a loja estará aberta em horário especial.
Nos outros dias, a loja estará aberta no horário normal.*/

const diaSemana = 6

if (diaSemana >= 0 && diaSemana <= 5) {
    console.log('A loja está aberta no horário normal: 9h às 18h.')
} else {
    console.log('A loja está aberta em horário especial: 10h às 14h.')
}

/*Você está criando um sistema de autenticação de usuários para um site. O sistema deve verificar se o usuário digitado é "admin". Se o usuário for "admin", o login será bem-sucedido e será exibida a mensagem "Login bem-sucedido!". Caso contrário, o sistema deve exibir "Usuário inválido."

Crie um programa utilizando o operador ternário que realize essa verificação e exiba a mensagem correspondente.*/

const usuario = "admin"

if (usuario === "admin") {
    console.log('Login bem-sucedido!')
} else {
    console.log('Usuário inválido')
}

/*Você está desenvolvendo um sistema para verificação de compatibilidade de frutas em um processo de preparo de sucos. O sistema precisa verificar se o tipo de fruta informado é compatível com o tipo esperado, de acordo com uma receita.

O suco pode ser feito somente com "laranja" ou "abacaxi".
Qualquer outra fruta que não seja "laranja" ou "abacaxi" deve gerar uma mensagem de erro, informando que a fruta não é compatível.
Crie um programa que, dado o nome da fruta, verifique se ela é compatível com a receita.*/

const fruta = "Laranja"

if (fruta === "Laranja" || fruta === "Abacaxi") {
    console.log('Fruta compatível para a receita.')
} else {
    console.log('Fruta incompatível para a receita.')
}

/*Imagine que você está desenvolvendo um site de compras. A pessoa só pode finalizar a compra se o carrinho não estiver vazio.

Crie um programa que, com base na variável carrinhoVazio (booleana), verifique se a compra pode ser finalizada. Se o carrinho não estiver vazio, mostre: "Compra finalizada com sucesso!". Caso contrário, exiba: "Não é possível finalizar a compra: carrinho vazio."*/

const carrinhoVazio = true

if (carrinhoVazio === false) {
    console.log('Compra finalizada com sucesso!')
} else {
    console.log('Não é possível finalizar a compra: carrinho vazio.')
}

/*Você está criando um sistema de verificação de status de pagamento de clientes. Dependendo do status, o sistema deve exibir uma mensagem apropriada:

Se o status for "pendente", exibe: "Pagamento pendente".
Se o status for "aprovado", exibe: "Pagamento aprovado".
Se o status for "recusado", exibe: "Pagamento recusado".
Use o switch/case para criar um programa que faça essa verificação e mostre a mensagem correspondente ao status do pagamento.*/

const verificacaoPagamento = "Aprovado"

switch (verificacaoPagamento) {
    case "Aprovado":
        console.log('Pagamento aprovado.')
        break;

    case "Pendente":
        console.log('Pagamento pendente.')
        break;

    case "Recusado":
        console.log('Pagamento recusado.')
        break;

    default:
        console.log('Faça o pagamento antes.')
        break;
}

/*Você está criando um sistema para um jogo, onde o personagem tem que passar por duas condições para conseguir avançar para o próximo nível:

O personagem precisa ter mais de 50 pontos.
O personagem deve ter pelo menos uma vida restante.
Crie um programa que, dado os pontos e as vidas restantes, verifique se o personagem pode ou não avançar para o próximo nível.*/

const pontos = 40
const vidas = 0

if (pontos > 50 && vidas >= 1) {
    console.log('Próximo nível liberado!')
} else {   
    console.log('Não pode avançar para o próximo nível.')
}

/*Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo com base na porcentagem de carga. O sistema deve classificar a bateria nas seguintes categorias:

"Crítica": se a bateria estiver abaixo de 20%
"Moderada": se estiver entre 20% e 80%
"Cheia": se estiver acima de 80%
Utilize o operador ternário para definir e exibir a categoria da bateria com base no valor da variável bateria.*/

const bateria = 10

if (bateria < 20) {
    console.log('Crítica')
} else if (bateria >= 20 && bateria <= 80){
    console.log('Moderada')
} else {
    console.log('Cheia')
}