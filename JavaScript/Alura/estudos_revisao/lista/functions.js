// /*Imagine que você está criando uma página de boas-vindas para um site de cursos online. Ao acessar a plataforma, o sistema precisa exibir uma mensagem de saudação para cada usuário. Às vezes, porém, o nome da pessoa pode estar ausente — e, nesse caso, uma saudação genérica deve ser exibida.

// Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. Use o parâmetro pré-definido para lidar com isso.*/

function saudacao(nome = "") { //A var nome já começará vazia, caso o argumento seja vazio
    if (nome) {
        console.log(`Olá, ${nome}! Boas vindas!`)
    } else {
        console.log("Olá! Boas vindas!")
    }
}

saudacao()

// /*Imagine que você está criando um sistema para um e-commerce que vende livros.Toda vez que o cliente aplica um cupom de desconto, o sistema precisa calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto.

// Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:

// o preço original do produto,
// a porcentagem de desconto (com um valor padrão de 10%).*/

function calcularDesconto(valor, porcentagem) {
    return valor - valor * porcentagem / 100
}

console.log(calcularDesconto(100, 20))

/*Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.

Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.*/

const calcularMedia = (nota1, nota2) =>  console.log((nota1 + nota2) / 2)

calcularMedia(7, 9)

// /*Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — mas a lógica precisa estar encapsulada em uma arrow function.

// Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:

// "Par" se o número for par
// "Ímpar" se for ímpar*/

const verficarParIdade = idade => {
    if (idade % 2 === 0) {
        console.log('Par')
    } else {
        console.log('Ímpar')
    }
}

verficarParIdade(7)

// /*Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

// Até 5 km: frete fixo de R$ 5
// De 5.1 km até 20 km: R$ 0,50 por quilômetro
// Acima de 20 km: frete fixo de R$ 20
// Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow Function? E aí? Como vai implementar esse desafio?*/

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

// /*Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

// Sua tarefa é criar uma função chamada processarPedido, que receba três parâmetros:

// o nome do cliente,
// o tipo do cliente (vip, novo ou comum),
// e uma função de callback responsável por exibir uma mensagem após o pedido ser processado.*/

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

// /*Imagine que você está desenvolvendo uma interface de atendimento online.Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.

// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

// o nome do usuário, e
// uma função de callback que será executada após 3 segundos.*/

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

/*Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo.Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:

Foi aprovado, se a pontuação for igual ou maior que 70
Precisa de reforço, se a pontuação estiver entre 50 e 69
Foi reprovado, se a pontuação for menor que 50
Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:

a pontuação final do jogador
uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.*/

function avaliarDesempenho(pontuacao, callback) {
    callback(pontuacao);
    if (pontuacao >= 70) {
        console.log('Você foi aprovado!');
    } else if (pontuacao < 50) {
        console.log('Você foi reprovado');
    } else {
        console.log('Você precisa de reforço');
    }
}

function gerarMensagem(pontuacao) {
    console.log('Pontuação: ', pontuacao);
}

avaliarDesempenho(20, gerarMensagem);

/*Você está desenvolvendo um sistema para ajudar pessoas a entenderem melhor o consumo de energia elétrica de seus aparelhos eletrônicos. O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.

Sua missão é criar três funções separadas, com responsabilidades bem definidas:

calcularConsumo(potencia, horasPorDia): Retorna o consumo mensal em kWh, com base na fórmula: consumo = (potencia × horasPorDia × 30) / 1000
classificarConsumo(consumo): Retorna a classificação com base na tabela:
Consumo mensal (kWh)	Classificação
Abaixo de 50	"Baixo consumo"
50 - 199	"Consumo moderado"
200 ou mais	"Alto consumo"
exibirResumo(nomeAparelho, consumo, classificacao): Exibe uma mensagem como:"Geladeira tem consumo de 180 kWh/mês e é classificada como Consumo moderado."*/

const nomeAparelho = "Geladeira";

function calcularConsumo (potencia, horasPorDia) {
    return (potencia * horasPorDia * 30) / 1000;
}

function classificarConsumo(consumo) {
    if (consumo < 50) {
        return "Baixo consumo";
    } else if (consumo > 50 && consumo < 200) {
        return "Consumo moderado";
    } else {
        return "Alto consumo";
    }
}

function exibirResumo (nomeAparelho, consumo, classificacao) {
    console.log(`${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como ${classificacao}`);
}

const consumo = calcularConsumo(700, 8);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);

/*Imagine que você está desenvolvendo um sistema de sorteio interativo para um evento online. Os participantes se inscrevem com um nome e uma pontuação (baseada em atividades realizadas). O sistema deve:

Sortear aleatoriamente um nome da lista de participantes.
Exibir esse nome com um pequeno atraso (como se fosse um suspense).
Avaliar se o participante foi premiado ou não com base na pontuação:
Acima de 80: "Parabéns, você foi premiado!"
Entre 50 e 80: "Você quase conseguiu! Fique de olho nos próximos sorteios."
Abaixo de 50: "Infelizmente, não foi dessa vez."
Sua missão é criar:

Uma função para sortear um nome aleatoriamente.
Uma função para exibir o nome sorteado com 2 segundos de atraso
Uma função para avaliar a pontuação.
Uma função final que organize o fluxo completo do sorteio.*/

const sortearParticipante = lista => {
    const index = Math.floor(Math.random() * lista.length);
    return lista[index];
};

const exibirResultado = (participante) => {
    console.log("Sorteando...");
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));
    }, 2000);
};

function avaliarPontuacao (pontuacao) {
    if (pontuacao > 80) {
        return "Parabéns, você foi premiado!";
    } else if (pontuacao >= 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    } else {
        return "Infelizmente, não foi dessa vez.";
    }
}

function realizarSorteio(lista) {
    const sorteado = sortearParticipante(lista);
    exibirResultado(sorteado);
}

const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 }
];

realizarSorteio(participantes);

/*Sua missão é criar uma função chamada contagemRegressiva que:

Receba um número inteiro positivo (ex: 5)
Imprima esse número e, a cada chamada, reduza em 1
Quando chegar em 0, exiba a mensagem: "Lançamento!"
A função deve ser implementada de forma recursiva, sem usar loops (for ou while).*/

function contagemRegressiva (tempo) {
    if (tempo > 0) {
        console.log(tempo)
        contagemRegressiva(tempo - 1);
    } else {
        console.log("Lançamento!");
    }
}

contagemRegressiva(5);