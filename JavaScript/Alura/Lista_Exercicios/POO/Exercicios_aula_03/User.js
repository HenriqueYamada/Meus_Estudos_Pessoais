export default class User {
    constructor(nome, email, nascimento, role = "estudante", ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role;
        this.ativo = ativo;
    }

    criarPerfil() {
        return `Perfil de ${this.nome} criado com sucesso como ${this.role}.`;
    }

    apagarPerfil() {
        return `Perfil de ${this.nome} foi apagado do sistema.`;
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.role}`;
    }

    exibirListaCursos() {
        return `Exibindo lista de todos os cursos disponíveis no sistema.`;
    }

    matricularEmCurso(nomeCurso) {
        return `Usuário ${this.nome} foi matriculado no curso de ${nomeCurso}.`;
    }

    exibirCursosMatriculados() {
        return `Exibindo cursos em que ${this.nome} está matriculado.`;
    }
}