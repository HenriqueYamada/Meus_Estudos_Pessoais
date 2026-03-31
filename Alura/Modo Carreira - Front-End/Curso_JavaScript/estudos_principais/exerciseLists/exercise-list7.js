/*1. Criando um objeto pessoal
Crie um objeto com seu nome, idade e profissão.*/

const sobreMim = {
    nome: 'Henrique',
    idade: 18,
    profissao: 'Monitor de Inglês'
}

console.log(sobreMim)

/*2. Acessando propriedades
Acesse e exiba o valor da propriedade "nome" no console.*/

console.log(sobreMim['nome'])

/*3. Atualizando valores
Modifique a propriedade "idade" com um novo valor.*/

sobreMim.idade = 30

console.log(sobreMim['idade'])

/*4. Adicionando uma nova propriedade
Adicione ao objeto uma nova propriedade chamada "cidade".*/

sobreMim.cidade = 'Assis'

console.log(sobreMim['cidade'])

/*5. Função com objeto
Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.*/

const pessoa = {
    nome: 'Fabiana',
    idade: 17,
    profissao: 'Estudante'
}

function frasePessoa(pessoa) {
    console.log('Olá ', pessoa['nome'], '! Você tem ', pessoa['idade'], ' anos e é ', pessoa['profissao'], ' atualmente')
}

frasePessoa(pessoa)

/*6. Lista de pessoas
Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.*/

const pessoas = [
    { nome: 'Henrique', idade: 18},
    { nome: 'Fabiana', idade: 17},
    { nome: 'Marlene', idade: 47}
]

console.log(pessoas)

/*7. Filtrando maiores de idade
Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.*/

console.log('Pessoas que são maiores de idade: ')

for (const pessoa of pessoas) {
    if (pessoa['idade'] >= 18) {
        console.log(pessoa['nome'])
    }
}

/*8. Objeto com método
Crie um objeto chamado usuario com as propriedades nome e saudacao.
A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa, utilizando o nome armazenado no objeto por acesso direto à propriedade.*/

const usuario = {
    nome: 'Henrique',
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}`
    }
}

console.log(usuario.saudacao())

/*9. Listando propriedades com for...in
Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício*/

for (const key in sobreMim) {
    console.log(`${key}: ${sobreMim[key]}`); 
}

/*10. Cálculo de compra
Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).*/

const compras = {
    preco: 99.99,
    quantidade: 7
}

function totalCompras(preco, quantidade) {
    return preco * quantidade
}

console.log('Total das compras: R$', totalCompras(compras['preco'], compras['quantidade']))