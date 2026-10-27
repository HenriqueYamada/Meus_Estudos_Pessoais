import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// Instanciando objetos
const aluno = new User("Henrique", "henrique@gmail.com", "2008-02-09");
const admin = new Admin("Rodrigo", "rodrigo@gmail.com", "1990-05-15");
const professor = new Docente("Ana", "ana@gmail.com", "1985-10-20");

// Testando o User
console.log("--- TESTES USER ---");
console.log(aluno.criarPerfil());
console.log(aluno.matricularEmCurso("JavaScript POO"));
console.log(aluno.exibirInfos());

// Testando o Admin
console.log("\n--- TESTES ADMIN ---");
console.log(admin.criarPerfil()); 
console.log(admin.criarCurso("Banco de Dados"));
console.log(admin.desativarPerfil("Carlos"));

// Testando o Docente
console.log("\n--- TESTES DOCENTE ---");
console.log(professor.criarPerfil()); 
console.log(professor.aprovarEstudante("Henrique", "JavaScript POO"));
console.log(professor.reprovarEstudante("João", "Lógica de Programação"));