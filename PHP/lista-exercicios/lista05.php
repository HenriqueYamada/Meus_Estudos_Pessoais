<?php

//1 - Escreva uma função em PHP que receba dois números inteiros e uma string representando a operação matemática e retorne o resultado da operação. 

function calculadora($operacao, $num1, $num2) {
    switch ($operacao) {
        case "+":
            echo $num1 + $num2;
            break;
        case "-":
            echo $num1 - $num2;
            break;
        case "*":
            echo $num1 * $num2;
            break;
        case "/":
            echo $num1 / $num2;
            break;
        default:
            echo "Operação inválida";
    }
}

$operacao = "+";
$num1 = 5;
$num2 = 7;

calculadora($operacao, $num1, $num2);
echo "\n";

// 2- Crie uma função em PHP que calcule o IMC baseado na altura e peso passados por parâmetro.

function calcImc(float $imc): string {
    if ($imc < 18.5) {
        $resp = "Abaixo do peso normal";
    } elseif ($imc >= 18.5 && $imc < 25) {
        $resp = "Peso normal";
    } elseif ($imc >= 25 && $imc < 30) {
        $resp = "Excesso de peso";
    } elseif ($imc >= 30 && $imc < 35) {
        $resp = "Obesidade classe I";
    } elseif ($imc >= 35 && $imc < 40) {
        $resp = "Obesidade classe II";
    } else {
        $resp = "Obesidade classe III";
    }

    return $resp;
}

echo "Qual a sua altura? \n> ";
$altura = (float) fgets(STDIN);
echo "Qual o seu peso? \n > ";
$peso = (float) fgets(STDIN);
$imc = $peso / $altura ** 2;

$respImc = calcImc($imc);
echo $respImc . "\n";

// 3 - Crie uma função em PHP que converta graus celsius para Fahrenheit.

function calcGraus($grausCelsius) {    
    $grausFahr = $grausCelsius * 1.8 + 32;
    echo "A temperatura de hoje é de $grausFahr °F";
}

echo "Quantos graus está hoje em °C? \n> ";
$grausCelsius = (float) fgets(STDIN);
calcGraus($grausCelsius);