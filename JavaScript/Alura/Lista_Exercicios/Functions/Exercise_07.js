// Imagine que você está desenvolvendo uma interface de atendimento online.Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.

// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

// o nome do usuário, e
// uma função de callback que será executada após 3 segundos.

function responderUsuario (nome, callback) {
    console.log("Processando sua pergunta...");
    setTimeout(() => {
        callback(nome);
    }, 3000);
}

const mostrarResposta = nome => console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida`);

responderUsuario("Camila", mostrarResposta);