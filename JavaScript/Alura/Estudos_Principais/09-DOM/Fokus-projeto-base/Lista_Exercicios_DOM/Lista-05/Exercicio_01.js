const html = document.querySelector('html');
const banner = document.querySelector('.app__image');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const startPauseBt = document.querySelector('#start-pause');

const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

const audioPlay = new Audio('./sons/play.wav');
const audioPausa = new Audio('./sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3');

const iniciarOuPausarBt = document.querySelector('#start-pause span');
const iniciarOuPausarBtIcone = document.querySelector(".app__card-primary-butto-icon") 

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => {
    alterarContexto('foco', 'foco.png');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    alterarContexto('curto', 'descanso-curto.png');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    alterarContexto('longo', 'descanso-longo.png');
    longoBt.classList.add('active');
});

function alterarContexto(contexto, imagem) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${imagem}`);

    // Alterado parâmetro de 'contexto' para 'botao'
    botoes.forEach(function (botao) {
        botao.classList.remove('active');
    });

    switch (contexto) {
        case "foco":
            titulo.innerHTML = 
            `Otimize sua produtividade,
            <br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;

        case "curto":
            titulo.innerHTML =
            `Otimize sua produtividade,
            <br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;

        case "longo":
            titulo.innerHTML =
            `Otimize sua produtividade,
            <br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
    
        default:
            break;
    }
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        audioPausa.play();
        zerar();
        return;
    }
    audioPlay.play(); 
    iniciarOuPausarBt.textContent = 'Pausar';
    iniciarOuPausarBtIcone.setAttribute('src', './imagens/pause.png');
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function contagemRegressiva() {
    if (tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play(); 
        zerar();
        alert('Tempo esgotado!');
        return;
    }

    console.log('Tempo decorrido: ' + tempoDecorridoEmSegundos);
    tempoDecorridoEmSegundos -= 1;
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = 'Começar';
    iniciarOuPausarBtIcone.setAttribute('src', './imagens/play_arrow.png');
    intervaloId = null;
}