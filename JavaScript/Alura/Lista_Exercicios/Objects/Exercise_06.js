// Você está desenvolvendo um sistema de controle de máquinas em uma fábrica. Cada máquina é representada por um objeto que, além das informações básicas, também possui um método interno que exibe seu status. Escreva um programa que:

// Crie um objeto maquina com as propriedades: nome, funcionando.
// Adicione um método chamado exibirStatus que exibe no console: "A máquina [nome] está em funcionamento." ou "A máquina [nome] está parada.", dependendo do valor de funcionando.
// Chame o método exibirStatus.

const maquina = {
  nome: 'Esteira Transportadora',
  funcionando: false,
  exibirStatus: function () {
    if (this.funcionando) {
        console.log("A máquina ", this.nome, " está em funcionamento.");
    } else {
        console.log("A máquina ", this.nome, " está parada.");
    }
  }
};

maquina.exibirStatus();