import { soma2 } from './operacoes.js'

/*1. Destructuring em objetos
Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.*/

const pessoa = {
    nome: 'Henrique',
    idade: 18,
    email: 'henriqueyamadajr@gmail.com'
}

const { nome, idade, email } = pessoa
console.log(nome, idade, email)

/*2. Destructuring em arrays
Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.*/

const linguagensDeProgramacao = ['Python', 'JavaScript', 'PHP']

const [ ling1, ling2, ling3 ] = linguagensDeProgramacao
console.log(ling1, ling2, ling3)

/*3. Rest operator em função
Crie uma função que receba vários números como parâmetros usando o operador rest (...).
Utilize um laço for para somar todos os valores recebidos e retorne o total.*/

function soma(...resto) {
    let soma = 0
    for (let i = 0; i < resto.length; i++) {
        soma += resto[i]
    }

    return soma
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

/*4. Spread operator com arrays
Crie dois arrays de frutas e combine-os usando o operador spread.*/

const frutas1 = ['Maçã', 'Banana', 'Morango']
const frutas2 = ['Kiwi', 'Meancia', 'Jaca']

const frutasUnidas = [...frutas1, ...frutas2]
console.log(frutasUnidas)

/*5. Spread operator com objetos
Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.*/

const nomes = {
    nome1: 'Fabiana',
    nome2: 'Henrique',
    nome3: 'Felipe'
}

const idades = {
    idade1: 17,
    idade2: 18,
    idade3: 19
}

const pessoas = {
    ...nomes,
    ...idades
}

console.log(pessoas)

/*6. Função com parâmetro default
Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.*/

function visitante(nome = 'Visitante') {
    console.log(`Olá ${nome}! Seja bem-vindo ao nosso site!`)
}

visitante('Henrique')

/*7. Trabalhando com datas
Crie uma variável com a data atual e exiba o dia, mês e ano formatados.*/

const data = new Date()

console.log('Data atual em pt-BR: ', data.toLocaleDateString('pt-BR'))

/*8. Modularização com export/import
Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).*/

console.log(soma2(5, 10))

/*9. Objeto com função construtora
Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
Em seguida, crie dois objetos Livro usando essa função.*/

function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.descrever = function () {
        return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
    };
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("1984", "George Orwell");

console.log(livro1);
console.log(livro2);

/*10. Método no objeto
Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando concatenação de strings.*/

console.log(livro1.descrever())
console.log(livro2.descrever())