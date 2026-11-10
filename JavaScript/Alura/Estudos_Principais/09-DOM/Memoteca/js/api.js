const api = {   
    async buscarPensamento() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos');
            return await response.json();
        } catch (error) {
            alert('Erro ao buscar pensamentos.');
            throw error;
        }
    },
    
    async salvarPensamento(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            alert('Erro ao buscar pensamentos.');
            throw error;
        }
    },
};

export default api;