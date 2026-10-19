// Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:

// Menor que 15: "Frio"
// De 15 a 25: "Agradável"
// Acima de 25: "Quente"
// Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente.

const temperatura = 22;

if (temperatura < 15) {
    console.log("Frio");
} else if (temperatura > 25) {
    console.log("Quente");
} else {
    console.log("Agradável");
}