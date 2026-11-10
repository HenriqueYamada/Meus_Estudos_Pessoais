import api from "./api.js"

const ui = {
    async renderizarPensamentos () {
        const listaPensamentos = document.getElementById("lista-pensamentos");

        try {
            const pensamentos = await api.buscarPensamento();
            pensamentos.forEach(pensamento => {
                listaPensamentos.innerHTML += 
                `
                    <li class="li-pensamento" data-id="${pensamento.id}">
                        <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
                        <div class="pensamento-conteudo">${pensamento.conteudo}</div>
                        <div class="pensamento-autoria">${pensamento.autoria}</div>
                    </li>
                `
            });
        } catch (error) {
            alert('Erro ao buscar pensamentos.');
            throw error;
        }
    }
}

export default ui;