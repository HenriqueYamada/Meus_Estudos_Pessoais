const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2024-01-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    },
};

const admin = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2024-01-01",
    role: "admin",
    ativo: true,
    criarCurso: function() {
        console.log("Curso criado!");
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();

// Cadeia de protótipo: Forma na qual o JavaScript procura o método original para acessar o primeiro objeto (na qual ele está tentando executar). Vai pegando os protótipos bases da própria linguagem