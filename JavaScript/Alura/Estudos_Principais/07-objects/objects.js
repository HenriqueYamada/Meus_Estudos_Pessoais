// Prática de objetos (básico)

    // const pessoa = {
    //     nome: 'Roberta R',
    //     nascimento: '2020-01-01',
    //     cpf: '23445667889',
    //     pontuacao: 4576,
    //     trofeus: ['speedrunner', 'indie']
    // };

    // // Imprimir nome e trofeu

    // console.log(pessoa.nome);
    // console.log(pessoa.trofeus[0]);

    // // Deletar uma propriedade do objeto

    // delete pessoa.cpf;
    // console.log(pessoa);

    // // Criar função para iterar os trofeus

    // function exibeTrofeus(listaTrofeus) {
    //     for (const trofeu of listaTrofeus) {
    //         console.log("Tem o troféu ", trofeu)
    //     }
    // }

    // exibeTrofeus(pessoa.trofeus);

// Prática de métodos de objetos (Parte 01)

    // const user = {
    //     nome: 'Roberta R',
    //     nascimento: '1996-01-01',
    //     cpf: '23445667889',
    //     pontuacao: 4576,
    //     trofeus: ['speedrunner', 'indie']
    // };

    // // adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.

    // user.calculaIdade = function calculaIdade () {
    //     const anoNasc = parseInt(this.nascimento.slice(0, 4));
    //     const idade = new Date().getFullYear() - anoNasc;
    //     console.log("A idade é: ", idade);
    // }

    // user.calculaIdade();

    // console.log(user);

// Prática de métodos de objetos (Parte 02)

    const clientes = [
        {
            nome: 'Marina M',
            ativo: true,
        },
        {
            nome: 'Rafael R',
            ativo: false,
        },
        {
            nome: 'Fabio F',
            ativo: false,
        },
    ];

    // acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.

    for (const cliente of clientes) {
        const status = cliente.ativo ? 'Ativo' : 'Inativo';
        console.log("Status cliente ", cliente.nome, ": ", status);
    }