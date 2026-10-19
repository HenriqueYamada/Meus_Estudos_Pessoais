// Você está criando um sistema de cadastro em que a pessoa usuária pode cadastrar quantos nomes quiser, um por vez. O processo deve continuar até que seja encontrado a palavra "fim" (com letras minúsculas).

// Crie um programa que com base em uma entrada pré-definida de nomes, exiba cada um deles, e encerre somente quando encontrar o valor "fim".

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];

for (let i = 0; i < entradas.length; i++) {
    if (entradas[i] === "fim") {
        break;
    }
    console.log("Nome: ", entradas[i]);
}

// const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];
// let i = 0;
 
// while (entradas[i] !== "fim") {
//   console.log("Nome:", entradas[i]);
//   i++;
// }