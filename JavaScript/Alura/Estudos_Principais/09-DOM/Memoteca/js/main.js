import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();

    const formularioPensamento = document.getElementById("pensamento-form");
    formularioPensamento.addEventListener("submit", manipularSubmissaoForm);
})

async function manipularSubmissaoForm(event) {
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value

    try {
        await api.salvarPensamento( { conteudo, autoria } );
        ui.renderizarPensamentos();
    } catch (error) {
        alert("Erro ao salvar pensamento");
    }
}

function manipularCancelamento() {
    ui.limparFormulario();
}



















// Conceitos de JavaScript:
// async - 
// await -
// try/catch -
// JSON -
// fetch() -
// HTTP - 