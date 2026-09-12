<?php

//1 - Escreva um programa que exiba, na tela do usuário, todos os números ímpares de 0 à 100.
$cont = 0;

while ($cont % 2 != 0 && $cont <= 100) {
    echo "$cont++";
}

for ($cont = 0; $cont <= 100; $cont++) {
    echo "$cont \n";
}

//2 - Crie um programa que, a partir de altura e peso, calcule o IMC e exiba a classificação do IMC.

$altura = $argv[1];
$peso = $argv[2];
$imc = $peso / ($altura)**2;

if ($imc < 18.5) {
    echo "Abaixo do peso normal";
} elseif ($imc >= 18.5 && $imc < 25) {
    echo "Peso normal";
} elseif ($imc >= 25 && $imc < 30) {
    echo "Excesso de peso";
} elseif ($imc >= 30 && $imc < 35) {
    echo "Obesidae classe I";
} elseif ($imc >= 35 && $imc < 40) {
    echo "Obesidade classe II";
} else {
    echo "Obesidade classe III";
}

//3 - Desenvolva um programa que exiba na tela uma saudação (bom dia, boa tarde ou boa noite) dependendo do horário encontrado em uma variável (inteiro representando as horas).

$horas = $argv[1];

if ($horas >= 6 && $horas < 12) {
    echo "Bom dia";
} elseif ($horas >= 12 && $horas < 18) {
    echo "Boa tarde";
} else {
    echo "Boa noite";
}