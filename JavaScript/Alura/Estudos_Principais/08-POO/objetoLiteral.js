const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true, // por padrão
    exibirInfos: function() {
        console.log(this.nome, this.email );
    }
}

// user.exibirInfos();

// const exibir = user.exibirInfos;


const exibir = function() {
    console.log(this.nome, this.email);
}

const exibirDados = exibir.bind(user);
exibirDados();