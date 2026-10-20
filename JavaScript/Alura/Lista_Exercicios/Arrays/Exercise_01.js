// Imagine que você está desenvolvendo um sistema para controlar uma lista de compras. O primeiro passo é permitir que a pessoa usuária acesse e altere os itens dessa lista.

// Escreva um programa que:

// Crie um array com os itens iniciais da lista de compras.
// Acesse e exiba o segundo item da lista.
// Modifique o último item da lista para um novo valor.

const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];

console.log("Segundo item da lista: ", listaDeCompras[1]);

const tamanhoLista = listaDeCompras.length;
listaDeCompras[tamanhoLista - 1] = 'Fruta';
console.log("Lista após modificação: ", listaDeCompras)