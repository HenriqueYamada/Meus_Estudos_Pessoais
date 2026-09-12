<?php

// 1 - Números impares

$cont = 0;

while ($cont <= 100) {
    if ($cont % 2 != 0) {
        echo $cont . "\n";
    }

    $cont++;
}

// 2 - Tabuada

$cont = 1;
echo "Digite um número para a tabuada: \n> ";
$num = (int) fgets(STDIN);

while ($cont <= 10) {
    $resultado = $num * $cont;
    echo $num . " x " . $cont . " = " . $resultado . "\n";
    $cont++;
}

//3 - IMC

echo "Qual a sua altura? \n> ";
$altura = (float) fgets(STDIN);
echo "Qual o seu peso? \n > ";
$peso = (float) fgets(STDIN);
$imc = $peso / $altura ** 2;

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

echo $resp;