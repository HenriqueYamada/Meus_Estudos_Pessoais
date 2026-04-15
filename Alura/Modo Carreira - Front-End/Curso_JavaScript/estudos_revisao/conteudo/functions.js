function calculaPotencia(num, pow) {
    result = 1
    for (let i = 0; i < pow; i++) {
        result = result * num
    }

    return result
}

console.log(calculaPotencia(4, 3))
console.log(calculaPotencia(5, 5))

const fatorial = function f(num) {
    if (num === 0 || num === 1) return 1
    return num * f(num - 1)
}

console.log(fatorial(5))

const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = (juros/100) + 1
    return valor * Math.pow(taxaJuros, tempo)
}

console.log(calculaJuros(1000, 5, 2))

function soma(a, b) { return a + b }
function multiplica(a, b) { return a * b }

function calcula(fnOperacacao, valorA, valorB) {
    return fnOperacacao(valorA, valorB)
}

console.log(calcula(soma, 5, 5))
console.log(calcula(multiplica, 5, 5))

const userId = '4545656'
const avisaUser = user => console.log('Sessão de ', userId, ' está inativa')

setTimeout(avisaUser, 2000)