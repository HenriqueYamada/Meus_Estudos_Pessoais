const URL_BASE = "http://localhost:3000/pets";
const api = {
  async buscarInformacoesPets() {
    try {
      const response = await fetch(`${URL_BASE}`);
      return await response.json();
    } catch (error) {
      alert('Erro ao buscar dados');
      throw error;
    }
  },

  async salvarPet(pet) {
    try {
      const response = await fetch(`${URL_BASE}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });
      return await response.json();
    } catch (error) {
      alert(`Erro: ${error.message}`);
      throw error;
    }
  },

  async buscarPetPorId(id) {
    try {
      const response = await fetch(`${URL_BASE}/${id}`);
      return await response.json();
    } catch (error) {
      alert(`Erro: ${error.message}`);
      throw error;
    }
  },

  async editarPet(pet) {
    try {
      const response = await fetch(`${URL_BASE}/${pet.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });
      return await response.json();
    } catch (error) {
      alert(`Erro: ${error.message}`);
      throw error;
    }
  },

  async deletarPet(id) {
    try {
      const response = await fetch(`${URL_BASE}/${id}`, {
        method: "DELETE",
      })
    } catch (error) {
      alert(`Erro: ${error.message}`);
      throw error;
    }
  }
};
export default api;