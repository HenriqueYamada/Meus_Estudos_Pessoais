const frutas = ['Maçã', 'Banana', 'Goiaba']

const maisFrutas = ['Uva', 'Morango', 'Banana']

const todasAsFrutas = [...frutas, ...maisFrutas]

const clone = [...frutas]

frutas.push('Pitanga')

console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasAsFrutas)

const [primeira, segunda, ...resto] = todasAsFrutas
console.log(primeira)
console.log(segunda)
console.log(resto)