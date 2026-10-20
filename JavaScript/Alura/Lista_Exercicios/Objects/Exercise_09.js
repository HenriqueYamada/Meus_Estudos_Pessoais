// Você está desenvolvendo um sistema de manutenção preventiva para uma indústria. Cada máquina registra os meses em que passou por manutenção ao longo do ano, armazenando a quantidade de dias parados em um objeto, onde cada chave representa um mês e o valor representa os dias de inatividade.

// Agora, o sistema precisa gerar um relatório que exiba:

// O total de dias parados no ano.
// A quantidade de meses com manutenção (ou seja, com valor maior que zero).
// Um alerta caso o total de dias parados seja maior que 20 dias: Status: Atenção! Acima do limite anual. ou Status: Dentro do limite anual.

const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let totalDias = 0;
let mesesComParada = 0;

for (const mes in manutencao) {
    const dias = manutencao[mes];
    totalDias += dias;

    if (dias > 0) {
        mesesComParada++;
    }
}

console.log("Total de dias parados: ", totalDias);
console.log("Meses com manutenção registrada: ", mesesComParada);

if (totalDias > 20) {
    console.log("Status: Atenção! Acima do limite anual");
} else {
    console.log("Status: Dentro do limite anual");
}