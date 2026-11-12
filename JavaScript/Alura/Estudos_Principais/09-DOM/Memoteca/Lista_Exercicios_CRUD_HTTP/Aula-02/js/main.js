import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPets();

  const formularioPet = document.getElementById("pet-form");
  formularioPet.addEventListener("submit", manipularSubmissaoFormulario);
});

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();
  const id = document.getElementById("pet-id").value;
  const nome = document.getElementById("pet-nome").value;
  const especie = document.getElementById("pet-especie").value;
  const raca = document.getElementById("pet-raca").value;

  try {
    if (id) {
      await api.editarPet({ id, nome, especie, raca });
    } else {
      await api.salvarPet({ nome, especie, raca });
    }
    ui.renderizarPets();
  } catch (error) {
    console.error("Erro ao salvar pet:", error);
    alert("Erro ao salvar pet. Tente novamente mais tarde.");
  }
}