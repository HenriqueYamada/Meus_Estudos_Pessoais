/* ==========================================================================
   1. CONCEITOS BÁSICOS & MANIPULAÇÃO DE ÍNDICES
   ========================================================================== */

// Criando um array simples e acessando elementos por índice
const numeros = [1, 2, 3, 4];

console.log('--- Acesso aos Elementos ---');
console.log(numeros[0]); // 1
console.log(numeros[1]); // 2
console.log(numeros[2]); // 3
console.log(numeros[3]); // 4

// Alterando valor de um índice existente
numeros[0] = 3;
console.log('\nApós alterar números[0]:', numeros);

// Atribuindo valor em índice distante (cria elemento esparso)
numeros[5] = 10;
console.log('Após adicionar números[5]:', numeros);

// Deletando elemento (mantém a posição como `empty`)
delete numeros[5];
console.log('Após deletar números[5]:', numeros);


/* ==========================================================================
   2. GERADORES DE SEQUÊNCIA
   ========================================================================== */

/**
 * Cria um array com uma sequência de números inteiros [inicio, fim].
 * @param {number} inicio - Valor inicial
 * @param {number} fim - Valor final (inclusive)
 * @returns {number[]} Array preenchido com a sequência
 */
function criaArrNum(inicio, fim) {
  const arr = [];
  for (let numero = inicio; numero <= fim; numero++) {
    arr.push(numero);
  }
  return arr;
}

console.log('\n--- Gerador de Sequência ---');
console.log(criaArrNum(12, 30));


/* ==========================================================================
   3. MÉTODOS DE MANIPULAÇÃO AVANÇADA
   ========================================================================== */

// Exemplo 3.1: Deep Copy (Cópia Profunda) de Arrays Multidimensionais
// Nota: Atribuir arrays a novas variáveis apenas copia a referência na memória, não os dados.

const arr1 = [1, [2, 3], [4, [5, 6]]];

/**
 * Realiza a cópia profunda de um array, tratando sub-arrays recursivamente.
 * @param {Array} arr - Array de origem
 * @returns {Array} Nova instância copiada
 */
const copiaArray = (arr) => {
  return arr.map((elem) => (Array.isArray(elem) ? copiaArray(elem) : elem));
};

const arr2 = copiaArray(arr1);

console.log('\n--- Deep Copy ---');
console.log('Original:', arr1);
console.log('Cópia:   ', arr2);


// Exemplo 3.2: Mapeamento e Normalização de Dados (map)
const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];

// Garante que todos os elementos da lista sejam convertidos para String
const cpfsFormatados = cpfs.map((cpf) => String(cpf));

console.log('\n--- Normalização de CPFs ---');
console.log(cpfsFormatados);