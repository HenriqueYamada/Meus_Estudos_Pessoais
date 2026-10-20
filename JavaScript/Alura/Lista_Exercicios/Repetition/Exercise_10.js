// Você está desenvolvendo o sistema de login de um app interno da empresa. O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes. Se digitar certo, exibe uma mensagem de acesso permitido. Se errar 3 vezes, bloqueia o acesso.

// Seu desafio é escolher o laço de repetição mais adequado para resolver este problema.

const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";

for (let i = 0; i < tentativas.length; i++) {
    if (tentativas[i] === senhaCorreta) {
        console.log("Acesso permitido!");
        break;
    } 

    if (i === 2) {
        console.log("Acesso bloqueado. Número máximo de tentativas atingido.");
        break;
    }

    console.log("Tentativa ", i + 1, " inválida.");
}