import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nasc, role = "admin", ativo= true) {
        super(nome, email, nasc, role, ativo);
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas`;
    }
}

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");

console.log(novoAdmin);
console.log(novoAdmin.criarCurso("JavaScript", 20));