// Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

// Até 5 km: frete fixo de R$ 5
// De 5.1 km até 20 km: R$ 0,50 por quilômetro
// Acima de 20 km: frete fixo de R$ 20
// Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow Function? E aí? Como vai implementar esse desafio?

const calcularFrete = distancia => {
    if (distancia <= 5) {
        return 5;
    } else if (distancia > 20) {
        return 20;
    } else {
        return distancia * 0.5;
    }
}

console.log(calcularFrete(3));
console.log(calcularFrete(12));
console.log(calcularFrete(25));