/*Você está criando um aplicativo para exibir a sequência de números até um valor que o usuário forneceu. O objetivo é mostrar todos os números a partir de 1 até o valor informado pelo usuário, de forma ordenada e crescente.

Como você pode gerar essa contagem e garantir que cada número seja mostrado até atingir o valor final fornecido?*/

let numeroFinal = 5
let numeroAtual = 1

while (numeroAtual <= numeroFinal) {
    console.log(numeroAtual)
    numeroAtual++
}

/*Você é uma pessoa desenvolvedora de interface em uma startup de tecnologia aeroespacial e precisa criar uma contagem regressiva automática para o painel de lançamento. A contagem deve começar de 10 até 0, exibindo “Lançar!” ao final.

Crie um programa que conte de 10 até 0 e exiba a mensagem “Lançar!” ao final.*/

for (numeroAtual = 10; numeroAtual >= 0; numeroAtual--) {
    console.log(numeroAtual)
}

console.log('Lançar!')

/*Você está criando um sistema de análise para um cliente que precisa identificar todos os números pares dentro de um intervalo informado. Ele quer saber quais valores são múltiplos de 2, para aplicar um filtro em dados financeiros.

Crie um programa que exiba todos os números pares de 1 até o número final fornecido pelo usuário.*/

numeroFinal = 10
for (numeroAtual = 1; numeroAtual <= numeroFinal; numeroAtual++) {
    if (numeroAtual % 2 == 0) {
        console.log(numeroAtual)
    }
}

/*Você é analista de segurança da informação em uma empresa e precisa validar a senha digitada por um novo usuário. Sua tarefa é mostrar, caractere por caractere, todos os símbolos digitados, para garantir que nada foi escondido.

Como você pode percorrer e exibir todos os caracteres de uma senha digitada, um por um?*/

const senha = 'seguranç@2025'

for (numeroAtual = 0;  numeroAtual < senha.length; numeroAtual++) {
    console.log('Caractere ', numeroAtual + 1, ': ', senha[numeroAtual])
}

/*Você está criando um sistema de cadastro em que a pessoa usuária pode cadastrar quantos nomes quiser, um por vez. O processo deve continuar até que seja encontrado a palavra "fim" (com letras minúsculas).

Crie um programa que com base em uma entrada pré-definida de nomes, exiba cada um deles, e encerre somente quando encontrar o valor "fim".*/

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];
numeroAtual = 0

while (entradas[numeroAtual] !== "fim") {
    console.log('Nome: ', entradas[numeroAtual])
    numeroAtual++
}

/*Você está trabalhando no sistema de controle de acesso de um laboratório secreto. Por questões de segurança, o número 10 deve ser evitado a todo custo. O contador de testes deve exibir os números normalmente, mas precisa ser encerrado imediatamente ao chegar nesse número.

Crie um programa que inicie a contagem em 1 e siga até 20. Se o número 10 for alcançado, o sistema deve exibir uma mensagem de alerta e interromper a contagem.*/

for (numeroAtual = 1; numeroAtual <= 20; numeroAtual++) {
    if (numeroAtual !== 10) {
        console.log(numeroAtual)
    } else {
        console.log("Número proibido encontrado! Encerrando...")
        break
    }
}

/*Você está desenvolvendo uma funcionalidade para um aplicativo de finanças pessoais. Um dos recursos permite simular quanto uma pessoa economizaria em um período de tempo, iniciando em R$1 no primeiro dia e aumentando esse valor em R$1 a cada novo dia. Ou seja, a cada dia que passa, ela economiza R$1 a mais do que no anterior.

Por exemplo, em 10 dias ela economizaria:

Dia 1: R$1
Dia 2: R$3
Dia 3: R$6
...
Dia 10: R$55
Crie um programa que calcule o total economizado ao final de 10 dias.*/

let somaEcon = 0
const totalDias = 10

for (numeroAtual = 1; numeroAtual <= totalDias; numeroAtual++) {
    somaEcon += numeroAtual
    console.log('Dia ', numeroAtual, ': R$', somaEcon)
}

/*Você está programando o temporizador de uma esteira aquecida para secagem de produtos. O sistema precisa manter a esteira aquecida por pelo menos 5 segundos, mesmo que a temperatura ideal já tenha sido atingida.

O painel deve exibir, segundo a segundo:

“Aquecendo... segundo X” a cada ciclo;
A mensagem "Temperatura ideal atingida." exatamente no segundo em que essa condição for alcançada;
E ao final, o total de segundos que o sistema permaneceu ligado.
Crie um programa que simule esse funcionamento do temporizador de aquecimento, garantindo que ele continue funcionando até atingir pelo menos 5 segundos.*/

let segundos = 1
const temperaturaIdealAlcancadaEm = 3

while (segundos <= 5) {
    console.log('Aquelecendo... segundo ', segundos)

    if (segundos === temperaturaIdealAlcancadaEm) {
        console.log('Temperatura ideal atingida.')
    }

    segundos++
}

console.log('Total de segundos: ', segundos - 1)

/*Você recebeu a tarefa de automatizar o painel de uma linha de empacotamento em um centro de distribuição. A cada ciclo, uma nova caixa é processada. A linha só pode processar no máximo 5 caixas válidas por vez. Mas, algumas caixas com número de identificação negativo precisam ser ignoradas, pois estão danificadas.

Crie um programa que simule o processamento das caixas, exibindo as válidas e ignorando as danificadas. O programa deve parar o processamento assim que 5 caixas válidas forem processadas.*/

const caixas = [12, -1, 8, 0, -5, 3, 7, 14]
let somaCaixasProcessadas = 0

for (numeroAtual = 0; numeroAtual < caixas.length; numeroAtual++) {        
    if (caixas[numeroAtual] < 0) {
        console.log('Caixa danificada, ignorada.')

    } else {
        console.log('Caixa processada: ', caixas[numeroAtual])
        somaCaixasProcessadas++
    }

    if (somaCaixasProcessadas === 5) {
        break
    }
}
console.log('Limite de caixas processadas atingido!')

/*Você está desenvolvendo o sistema de login de um app interno da empresa. O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes. Se digitar certo, exibe uma mensagem de acesso permitido. Se errar 3 vezes, bloqueia o acesso.

Seu desafio é escolher o laço de repetição mais adequado para resolver este problema.*/

const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secret";

for (let i = 0; i < tentativas.length; i++) {
    if (tentativas[i] === senhaCorreta) {
        console.log('Acesso permitido!');
        break;
    }

    console.log(`Tentativa ${i + 1} inválida.`);

    if (i === tentativas.length - 1) {
        console.log('Acesso bloqueado. Número máximo de tentativas atingido.');
    }
}