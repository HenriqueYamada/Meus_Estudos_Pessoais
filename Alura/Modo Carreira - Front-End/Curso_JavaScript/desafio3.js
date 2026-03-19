const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let acertos = 0

rl.question('1) Qual palavra usamos para criar uma função?\n (a) define \n (b) function \n (c) create\n > ', (resp1) => {
    if (resp1 == 'b') {
        acertos++
    }

    rl.question('2) Qual desses é uma estrutura de repetição? \n (a) loopar() \n (b) repeat \n (c) for \n > ', (resp2) => {
        if (resp2 == 'c') {
            acertos++
        }

        rl.question('3) Qual valor é considerado falsy em JavaScript? \n (a) 1 \n (b) 0 \n (c) "texto" \n > ', (resp3) => {
            if(resp3 == 'b') {
                acertos++
            }

            if (acertos == 3) {
                console.log('Parabéns! Você acertou tudo!')
            } else {
                if (acertos == 2) {
                    console.log('Muito bom! continue assim!')
                } else {
                    if (acertos == 1) {
                        console.log('Melhor estudar na próxima!')
                    } else {console.log('Continue praticando!')}
                }
            }

            rl.close()
        })
    })
})