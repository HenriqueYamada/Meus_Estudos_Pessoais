// Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

// Sua tarefa é criar uma função chamada processarPedido, que receba três parâmetros:

// o nome do cliente,
// o tipo do cliente (vip, novo ou comum),
// e uma função de callback responsável por exibir uma mensagem após o pedido ser processado.

function processarPedido(nome, tipoCliente, callback) {
    console.log(`Processando pedido de ${nome}...`);
    callback(nome, tipoCliente);
}

function mensagemPersonalizada (nome, tipo) {
    if (tipo === "vip") {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else if (tipo === "novo") {
        console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else {
        console.log(`Obrigado pela sua compra, ${nome}!`);
    }
}

processarPedido("Lucas", "vip", mensagemPersonalizada);
processarPedido("Fernanda", "novo", mensagemPersonalizada);
processarPedido("João", "comum", mensagemPersonalizada);