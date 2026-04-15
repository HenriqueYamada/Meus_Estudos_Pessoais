/*Imagine que você está criando uma página de boas-vindas para um site de cursos online. Ao acessar a plataforma, o sistema precisa exibir uma mensagem de saudação para cada usuário. Às vezes, porém, o nome da pessoa pode estar ausente — e, nesse caso, uma saudação genérica deve ser exibida.

Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. Use o parâmetro pré-definido para lidar com isso.*/

function saudacao(nome = "") { //A var nome já começará vazia, caso o argumento seja vazio
    if (nome) {
        console.log(`Olá, ${nome}! Boas vindas!`)
    } else {
        console.log("Olá! Boas vindas!")
    }
}

saudacao()

/*Imagine que você está criando um sistema para um e-commerce que vende livros.Toda vez que o cliente aplica um cupom de desconto, o sistema precisa calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto.

Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:

o preço original do produto,
a porcentagem de desconto (com um valor padrão de 10%).*/

function calcularDesconto(valor, porcentagem) {
    return valor - valor * porcentagem / 100
}

console.log(calcularDesconto(100, 20))

/*Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.

Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.*/

const calcularMedia = (nota1, nota2) =>  console.log((nota1 + nota2) / 2)

calcularMedia(7, 9)

/*Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — mas a lógica precisa estar encapsulada em uma arrow function.

Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:

"Par" se o número for par
"Ímpar" se for ímpar*/

const verficarParIdade = idade => {
    if (idade % 2 === 0) {
        console.log('Par')
    } else {
        console.log('Ímpar')
    }
}

verficarParIdade(7)

/*Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

Até 5 km: frete fixo de R$ 5
De 5.1 km até 20 km: R$ 0,50 por quilômetro
Acima de 20 km: frete fixo de R$ 20
Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow Function? E aí? Como vai implementar esse desafio?*/

const calcularFrete = (distancia) => {
    let frete = 0

    if (distancia <= 5) {
        frete = 5
    } else if (distancia > 20) {
        frete = 20
    } else {
        frete = distancia * .5
    }

    return frete
}

console.log(calcularFrete(12))

/*Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

Sua tarefa é criar uma função chamada processarPedido, que receba três parâmetros:

o nome do cliente,
o tipo do cliente (vip, novo ou comum),
e uma função de callback responsável por exibir uma mensagem após o pedido ser processado.*/

function processarPedido(nome, tipo, mensagemPersonalizada) {
    console.log('Processando pedido de ', nome, '...')
    mensagemPersonalizada(nome, tipo)
}

function mensagemPersonalizada(nome, tipo) {
    if (tipo === 'vip') {
        console.log('Obrigado pela preferência, ', nome, '! Você ganhou frete grátis.')
    } else if (tipo === 'novo') {
        console.log('Bem-vindo(a), ', nome, '!  Aproveite um cupom de boas-vindas.')
    } else {
        console.log('Obrigado pela sua compra, ', nome, '!')
    }
}

processarPedido("João", "comum", mensagemPersonalizada);

/*Imagine que você está desenvolvendo uma interface de atendimento online.Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.

Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

o nome do usuário, e
uma função de callback que será executada após 3 segundos.*/

function responderUsuario(nome, callback) {
    console.log('Processando sua pergunta...')
    setTimeout( () => {
        callback(nome)
    }, 3000)

}

function mostrarResposta(nome) {
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`)
}

responderUsuario("Camila", mostrarResposta)