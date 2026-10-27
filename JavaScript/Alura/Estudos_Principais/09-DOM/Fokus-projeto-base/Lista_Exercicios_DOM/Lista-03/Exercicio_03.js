
const html = document.querySelector('html');
const banner = document.querySelector('.app__image');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

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

    botoes.forEach(function (contexto) {
        contexto.classList.remove('active');
    });

    switch (contexto) {
        case "foco":
            titulo.innerHTML = 
            `Otimize sua produtividade,
            <br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case "curto":
            titulo.innerHTML =
            `Otimize sua produtividade,
            <br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case "longo":
            titulo.innerHTML =
            `Otimize sua produtividade,
            <br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
    
        default:
            break;
    }
}