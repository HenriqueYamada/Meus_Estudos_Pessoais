<?php
//1 - Escreva um programa em PHP que exiba seu nome na tela.
echo "Henrique \n";

//2 - Crie um programa em PHP que calcule a média de três notas e exiba o resultado.

$soma = 5 + 8 + 8;
$media = $soma / 3;
echo "A média das notas é: $media \n";

//3 - Elabore um programa em PHP que receba um valor em metros e converta para centímetros.

$medida = $argv[1] ?? 0;
$medidaCentimetros = $medida / 100;
echo $medidaCentimetros; 

//4 - Desenvolva um programa em PHP que verifique se um ano é bissexto ou não.

$ano = $argv[1] ?? 0;
if ($ano % 4 == 0 && $ano % 400 == 0) {
    echo "$ano é bissexto";
} else {
    echo "$ano não é bissexto";
} 

// 5 - Escreva um programa em PHP que converta uma temperatura de Celsius para Fahrenheit.

$grausCelsius = $argv[1] ?? -32;
$grausFahr = $grausCelsius * 1.8 + 32;
echo "A temperatura de hoje é de $grausFahr °F";