// Imagine que você está desenvolvendo um sistema de sorteio interativo para um evento online. Os participantes se inscrevem com um nome e uma pontuação (baseada em atividades realizadas). O sistema deve:

// Sortear aleatoriamente um nome da lista de participantes.
// Exibir esse nome com um pequeno atraso (como se fosse um suspense).
// Avaliar se o participante foi premiado ou não com base na pontuação:
// Acima de 80: "Parabéns, você foi premiado!"
// Entre 50 e 80: "Você quase conseguiu! Fique de olho nos próximos sorteios."
// Abaixo de 50: "Infelizmente, não foi dessa vez."
// Sua missão é criar:

// Uma função para sortear um nome aleatoriamente.
// Uma função para exibir o nome sorteado com 2 segundos de atraso
// Uma função para avaliar a pontuação.
// Uma função final que organize o fluxo completo do sorteio.

const sortearParticipante = (lista) => {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
};
 
const avaliarPontuacao = (pontuacao) => {
    if (pontuacao > 80) {
        return "Parabéns, você foi premiado!";
    } else if (pontuacao >= 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    } else {
        return "Infelizmente, não foi dessa vez.";
    }
};
 
const exibirResultado = (participante) => {
    console.log("Sorteando...");
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));
    }, 2000);
};
 
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