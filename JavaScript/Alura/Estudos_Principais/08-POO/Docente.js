import User from "./User.js";

export default  class Docente extends User {
    constructor(nome, email, nasc, role = "docente", ativo= true) {
        super(nome, email, nasc, role, ativo);
    }

    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso de ${curso}, resposável ${this.nome}.`;
    }
}

const novoDocente = new Docente("Rodrigo", "r@r.com", "2024-01-01");

console.log(novoDocente.aprovarEstudante("Juliana", "JavaScript"));