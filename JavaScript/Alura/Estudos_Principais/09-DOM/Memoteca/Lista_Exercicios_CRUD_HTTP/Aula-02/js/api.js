const api = {
    async buscarPensamento() {
        try {
            const response = await fetch('http://localhost:3001/pets');
            return await response.json();
        } catch (error) {
            alert('Erro ao buscar pensamentos;');
            throw error;
        }
    },

    async adicionarPensamento(pensamento) {
        try {
            const response = await fetch('http://localhost:3001/pets', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            alert('Erro ao adicionar pensamentos;');
            throw error;
        }
    },

      async buscarPetPorId(id) {
        try {
            const response = await fetch(`http://localhost:3000/pets/${id}`);
            return await response.json();
        } catch (error) {
            alert(`Erro: ${error.message}`);
            throw error;
        }
    },

    async editarPet(pet) {
        try {
        const response = await fetch(`http://localhost:3000/pets/${pet.id}`, {
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

    async Pet(pet) {
        try {
        const response = await fetch(`http://localhost:3000/pets/${pet.id}`, {
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
}

export default api;