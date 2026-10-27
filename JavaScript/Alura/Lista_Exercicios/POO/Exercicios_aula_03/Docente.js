import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarPerfil() {
        return `Perfil de Docente ${this.nome} criado para ministrar aulas.`;
    }

    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso de ${curso}, responsável: ${this.nome}.`;
    }

    reprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} foi reprovado no curso de ${curso}, responsável: ${this.nome}.`;
    }
}