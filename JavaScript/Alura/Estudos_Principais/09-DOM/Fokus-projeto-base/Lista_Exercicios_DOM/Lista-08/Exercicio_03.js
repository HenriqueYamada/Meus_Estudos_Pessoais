function editarTarefa () {
    const novaDescricao = prompt('Qual o nome da nova tarefa: ');

    if (novaDescricao && novaDescricao.trim() !== '') {
        paragrafo.textContent = novaDescricao;
        tarefas.descricao = novaDescricao;
        atualizarTarefas()
        alert("Tarefa atualizada com sucesso!")
    } else {
        alert("Atualização cancelada ou valor inválido!")
    }
}