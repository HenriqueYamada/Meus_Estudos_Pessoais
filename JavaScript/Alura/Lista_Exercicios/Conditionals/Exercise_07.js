// Imagine que você está desenvolvendo um site de compras. A pessoa só pode finalizar a compra se o carrinho não estiver vazio.

// Crie um programa que, com base na variável carrinhoVazio (booleana), verifique se a compra pode ser finalizada. Se o carrinho não estiver vazio, mostre: "Compra finalizada com sucesso!". Caso contrário, exiba: "Não é possível finalizar a compra: carrinho vazio."

const carrinhoVazio = true;

const compras = carrinhoVazio
    ? "Não é possível finalizar a compra: carrinho vazio."
    : "Compra finalizada com sucesso!"

console.log(compras);