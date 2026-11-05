function debugar() {
    debugger;

    const novaDescricao = prompt('Qual o nome da nova tarefa?: ')
    console.log('Nome da nova tarefa: ', novaDescricao);

    if(novaDescricao === null) {
        console.log('Edição cancelada!');
        return
    }

    if (novaDescricao) {
        paragrafo.textContent = novaDescricao
        tarefa.descricao = novaDescricao
        atualizarTarefas()
    }
}