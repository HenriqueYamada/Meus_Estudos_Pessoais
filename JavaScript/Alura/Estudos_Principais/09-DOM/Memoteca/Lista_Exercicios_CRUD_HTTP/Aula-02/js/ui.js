import api from "./api.js";

const ui = {
    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById("lista-pensamentos");
        listaPensamentos.innerHTML = ""; // Limpa a lista antes de renderizar

        try {
            const pensamentos = await api.buscarPensamento();
            pensamentos.forEach(pensamento => {
                ui.adicionarPensamentoNaLista(pensamento);
            });
        } catch (error) {
            alert('Erro ao buscar pensamentos.');
            throw error;
        }
    },

    adicionarPensamentoNaLista(pensamento) {
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const li = document.createElement("li");
        li.setAttribute("data-id", pensamento.id);
        li.classList.add("li-pensamento");

        const iconeAspas = document.createElement("img");
        iconeAspas.src = "assets/imagens/aspas-azuis.png";
        iconeAspas.alt = "Aspas azuis";
        iconeAspas.classList.add("icone-aspas");

        const pensamentoConteudo = document.createElement("div");
        pensamentoConteudo.textContent = pensamento.conteudo;
        pensamentoConteudo.classList.add("pensamento-conteudo");

        const pensamentoAutoria = document.createElement("div");
        pensamentoAutoria.textContent = pensamento.autoria;
        pensamentoAutoria.classList.add("pensamento-autoria");

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => ui.preencherFormulario(pet.id);

        li.appendChild(iconeAspas);
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        li.appendChild(botaoEditar);
        listaPensamentos.appendChild(li);
    },

    limparFormulario() {
        document.getElementById("pensamento-form").reset();
    }
};

export default ui;