function saudacao(nome) {
    console.log('Olá, ', nome)
}

let nome = 'Henrique'

saudacao(nome)
saudacao('Vinicius')
saudacao('fabiana')

// parâmetro: nome da função (saudacao())
// argumento: valor da função ('Henrique')

function calcularDobroDeUmNumero(num) {
    return num * 2
}

const numeroDobrado = calcularDobroDeUmNumero(4)
console.log(numeroDobrado)