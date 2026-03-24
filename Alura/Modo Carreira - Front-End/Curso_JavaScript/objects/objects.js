const pessoa = {
    nome: 'Ana',
    idade: 26,
    temCNH: true
}

console.log('Nome: ', pessoa.nome)

pessoa.sobrenome = 'Paula'

console.log('Sobrenome: ', pessoa.sobrenome)

const livro = {
    titulo: 'O Hobit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
}

livro.publicado = true

livro.idiomas = [
    'Inglês', 'Português', 'Espanhol'
]

livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log('Antes: ', livro)

delete livro.paginas

console.log('Depois: ', livro)

console.log('Autor do livro: ', livro['autor'])

const autor = {
    nome: 'J. R. R. Tolkien',
    nacionalidade: 'Britânico',
    idade: 98
}

console.log('Autor: ', autor)

livro.autor = autor

console.log(livro)