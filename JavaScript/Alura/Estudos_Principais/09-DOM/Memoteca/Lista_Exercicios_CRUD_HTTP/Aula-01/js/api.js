const api = {
    async buscarPensamento() {
        try {
            const response = await fetch('http://localhost:3001/pets');
            return await response.json();
        } catch (error) {
            alert('Erro ao buscar pensamentos;');
            throw error;
        }
    }
}

export default api;