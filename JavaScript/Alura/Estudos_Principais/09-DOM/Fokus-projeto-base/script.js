const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const playStartOuPause = document.querySelector('.app__card-primary-butto-icon')
const startPauseBt = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');

const beep = new Audio('./sons/beep.mp3')
const play = new Audio('./sons/play.wav')
const pause = new Audio('./sons/pause.mp3')

const iniciarOuPausarBt = document.querySelector('#start-pause span');

const tempoNaTela = document.querySelector('#timer');

musica.loop = true;

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

function alterarContexto (contexto) {   
    mostrarTempo();
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`)

    switch (contexto) {
        case "foco":
            titulo.innerHTML = 
            `Otimize sua produtividade,
            <br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`

            break;

        case "descanso-curto":
            titulo.innerHTML = 
            `Que tal dar uma respirada?,
            <br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

        case "descanso-longo":
            titulo.innerHTML = 
            `Hora de voltar à superfície.
            <br>
            <strong class="app__title-strong">Faça uma pausa longa!</strong>`
            break;
        
        default:

            break;
    }
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        pause.play();
        playStartOuPause.setAttribute('src', './imagens/play_arrow.png');
        zerar();
        return;
    }
    play.play();
    playStartOuPause.setAttribute('src', './imagens/pause.png');
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBt.textContent = "Pausar";
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        beep.play();
        alert('Tempo esgotado!');
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = "Começar";
    intervaloId = null;
}

function mostrarTempo () {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();

/* Métodos, Propriedades e Objetos de JS estudados:
   - querySelector: Selecionar o primeiro elemento do HTML usando um seletor CSS.
   - querySelectorAll: Selecionar todos os elementos do HTML que combinam com um seletor CSS (retorna uma NodeList).
   - setAttribute: Modificar ou adicionar o valor de um atributo HTML (como 'src' ou 'data-contexto').
   - classList (add / remove): Adicionar ou remover classes CSS de um elemento dinamicamente.
   - addEventListener: Escutar interações do usuário no site (como 'click' ou 'change') e disparar uma função.
   - innerHTML: Inserir ou alterar o conteúdo interno de um elemento HTML (interpretando tags como <strong> e <br>).
   - textContent: Alterar apenas o texto puro de um elemento HTML (sem interpretar tags).
   - forEach: Percorrer cada item de uma lista de elementos (usado para remover a classe 'active' de todos os botões).
   - new Audio(): Criar uma instância de áudio para carregar e controlar arquivos de som.
   - play(): Iniciar a reprodução de um arquivo de áudio.
   - pause(): Pausar a reprodução de um arquivo de áudio.
   - setInterval(): Executar uma função repetidamente em um intervalo de tempo fixo (em milissegundos).
   - clearInterval(): Cancelar a repetição contínua de um temporizador iniciado pelo setInterval.
   - new Date(): Criar um objeto para manipular datas e converter tempos numéricos em segundos.
   - toLocaleTimeString(): Formatar o objeto Date para exibir o tempo no padrão da região escolhida (ex: minutos e segundos em 'pt-BR').
*/