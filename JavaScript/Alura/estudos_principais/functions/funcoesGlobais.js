//setTimeout

/*function saudacao() {
    console.log('E aí, beleza?')
}

setTimeout(saudacao, 1000)*/

//

let contador = 10

const id = setInterval (() => {
    console.log('Tempo decorrido (em seg.): ', contador)
    contador--
    if (contador == 0) {
        clearInterval(id)    
    }
}, 1000)