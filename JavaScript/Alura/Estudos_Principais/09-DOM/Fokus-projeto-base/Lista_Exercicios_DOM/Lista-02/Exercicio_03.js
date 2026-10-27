const html = document.querySelector('html');
const banner = document.querySelector('.app__image');
const focoBt = document.querySelector('app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const titulo = document.querySelector('.app__title');

focoBt.addEventListener('click', () => {
    alterarContexto('foco', 'foco.png');
});

curtoBt.addEventListener('click', () => {
    alterarContexto('curto', 'descanso-curto.png')
});

longoBt.addEventListener('click', () => {
    alterarContexto('longo', 'descanso-longo.png')
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