// Você está finalizando o back-end de uma plataforma de cursos online. Cada curso possui uma lista de estudantes com seus respectivos dados de progresso. Sua tarefa é construir um relatório que mostre o desempenho geral da turma.

// Você deve escrever um programa que:

// Crie um objeto chamado curso, com as seguintes propriedades:

// titulo: string com o nome do curso;
// estudantes: um array de objetos, cada um com nome e progresso (número de 0 a 100);
// Um método interno chamado gerarRelatorio.
// O método gerarRelatorio deve:

// Percorrer o array de estudantes;
// Exibir no console o nome de cada estudante e sua situação:
// Se o progresso for igual ou maior que 70, mostrar "Aprovado";
// Senão, mostrar "Em andamento";
// Ao final, mostrar:
// A quantidade total de estudantes;
// A média geral de progresso da turma.

const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 }
  ],

  gerarRelatorio: function () {
    let totalProgresso = 0;

    for (let estudante of this.estudantes) {
        const situacao = estudante.progresso >= 70 ? "Aprovado" : "Em andamento";
        console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${situacao}`);
        totalProgresso += estudante.progresso;
    }

    const media = (totalProgresso / this.estudantes.length).toFixed(2);

    console.log(`\nTotal de estudantes: ${this.estudantes.length}`);
    console.log(`Média geral da turma: ${media}%`);
  }
};

curso.gerarRelatorio();