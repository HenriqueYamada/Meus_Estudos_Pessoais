const html = document.querySelector('html');
const banner = document.querySelector('.app__image');
const focoBt = document.querySelector('app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const titulo = document.querySelector('.app__title');

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
    longoBtBt.classList.add('active');
});

function alterarContexto(contexto, imagem) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${imagem}`);

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