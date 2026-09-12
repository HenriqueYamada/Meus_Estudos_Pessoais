<?php

// 1 - Escreva um programa em PHP que inicialize um array de notas e exiba somente as 3 maiores notas do array.

/*$notas = [7, 8.9, 2, 3.9, 10, 6];
rsort($notas);
echo "$notas[0] \n $notas[1] \n $notas[2]";

/*sort ($notas);
$qntdNotas = count($notas);

for ($i = $qntdNotas; $i > $qntdNotas - 3; $i--) {
    echo $notas[$i - 1] . "\n";
}*/

// 2 - Crie um programa em PHP que transforme a string “Vinicius Dias,1997,Programador” em um array em que cada item está separado por vírgulas.

/*$string = "Vinicius Dias,1997,Programador";

var_dump(explode(',', $string));*/

// 3 - Escreva uma função em PHP que receba um array de strings por parâmetro e o retorne ordenado em ordem alfabética.

function funcaoDeOrganizacao(array $frutas): array {
    sort($frutas);
    return $frutas;
}

$frutas = ["Banana", "Morango", "Abacaxi", "Melancia"];
$frutasOrdenadas = funcaoDeOrganizacao($frutas);
print_r($frutasOrdenadas);