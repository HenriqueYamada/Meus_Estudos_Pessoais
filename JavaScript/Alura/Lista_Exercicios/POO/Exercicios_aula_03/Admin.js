import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarPerfil() {
        return `Perfil de Administrador(a) ${this.nome} criado com sucesso.`;
    }

    criarCurso(nomeCurso) {
        return `Curso de ${nomeCurso} criado pelo Admin ${this.nome}.`;
    }

    excluirCurso(nomeCurso) {
        return `Curso de ${nomeCurso} excluído pelo Admin ${this.nome}.`;
    }

    desativarPerfil(nomeUsuario) {
        return `O perfil de ${nomeUsuario} foi desativado pelo Admin ${this.nome}.`;
    }
}