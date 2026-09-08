/*1. Lista de nomes
Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.*/

const nomes = ['Henrique', 'Fabiana', 'Marlene', 'Felipe', 'Danilo']

console.log(nomes)

/*2. Adicionar e remover itens
Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.*/

const frutas = ['Morango', 'Kiwi', 'Jabuticaba', 'Melão']

frutas.push('Melancia')
frutas.shift()
console.log(frutas)

/*3. Contar itens do array
Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.*/

const cidades = ['Assis', 'Maracaí', 'Cândido Mota', 'Tarumã', 'Marília']

console.log('Quantidade de cidades: ', cidades.length, ' cidades')

/*4. Somar todos os números
Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
}

console.log('Soma: ', soma)

/*5. Média de notas
Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.*/

const notas = [7, 10, 4, 6]

soma = 0

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
}

let media = soma/notas.length
console.log('Média das notas: ', media)

/*6. Mensagens personalizadas com forEach
Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.*/

const nomes2 = ['Henrique', 'Fabiana', 'Marlene', 'Felipe', 'Danilo']

nomes2.forEach((nome) => {
    console.log('Olá, ', nome, '!')
})

/*7. Descontos com map
Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.*/

const precos = [10.99, 583.49, 5.83, 80]

const descontos = precos.map((preco) => {
    let desconto = 0
    desconto = preco - preco * 10 / 100
    console.log('Descontos: ', desconto.toFixed(2))
})

/*8. Filtrar valores altos
Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.*/

const idades = [18, 21, 7, 19, 15, 89]

const maioridade = idades.filter((idade) => {
    if (idade >= 18) {
        return idade
    }
})

console.log('Idades que são maiores que 18: ', maioridade)

/*9. Simulando carrinho de compras
Crie um array com os preços de produtos em um carrinho de compras.
Utilize um laço for ou for...of para calcular o valor total da compra.

Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.*/

const compras = [299.99, 15.39, 89.99, 99.99, 19.99]

soma = 0

for (let i = 0; i < compras.length; i++) {
    soma = soma + compras[i]
}

let desconto = 0
desconto = soma - soma * 20 / 100

console.log('Total das compras com 20% de desconto: R$', desconto.toFixed(2))

/*10. Lista de tarefas
Crie dois arrays:

um array com nomes de tarefas
outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
Exiba a lista de tarefas pendentes no console.*/

const tarefas = ['Matematica', 'Geografia', 'Português', 'História', 'Ciências']
const concluidas = [true, false, true, false, false]

const tarefasPendentes = tarefas.filter((tarefa, indice) => {
    return concluidas[indice] === false; 
})

console.log('Tarefas pendentes: ', tarefasPendentes)