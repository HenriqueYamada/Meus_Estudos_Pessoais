const html = document.querySelector('html');
const banner = document.querySelector('.app__image');

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
}