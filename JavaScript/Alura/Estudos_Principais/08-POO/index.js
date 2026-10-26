import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoUser = new User("Juliana", "j@j.com", "2024-01-01")
console.log(novoUser.exibirInfos());

// novoUser.#nome = "Márcia"
// console.log(novoUser.exibirInfos());
// console.log(novoUser.#nome);f

// Encapsulamento: Quando não queremos que dados sejam alterados dentro de uma classe em outros arquivos/códigos, colocamos o "private" ou nesse caso "#" no começo das variáveis para dizer que elas não podem ser mudadas por fora