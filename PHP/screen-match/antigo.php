<?php
require __DIR__ . '/src/Modelo/Filme.php';
require __DIR__ . "/src/functions.php";

echo "Bem-vindo(a) ao Screen Match! \n";

// Aprendendo a usar variáveis do tipo int, float e boolean

/*$anoLancamento = $argv[1] ?? 2022; // Usando o operador de coalescência nula para definir um valor padrão


$planoPrime = true;
$incluidoNoPlano = $planoPrime || $anoLancamento < 2020;

//echo $notaFilme;
//echo $incluidoNoPlano;
//echo $incluidoNoPlano ? 'True' : 'False';

// Aprendendo a usar variáveis do tipo string: Concatenação e Interpolação

//echo "Nome do filme: " . $nomeFilme . "\n";
//echo "Nota do filme: $notaFilme \n";

//echo 'Nome do filme: ' . $nomeFilme . '\n';
//echo 'Nota do filme: $notaFilme \n';

echo "Nome do filme: $nomeFilme \n";
echo "Nota do filme: $notaFilme \n";
echo "Ano de lançamento: $anoLancamento \n";

// Aprendendo a tomar decisões - condicionais (if - elseif - else, match())

$nomeFilme = "Se beber não case";
$nomeFilme = "Thor: Ragnarok";
$nomeFilme = "Top Gun - Maverick";

exibeMensagemLancamento($anoLancamento);

$genero = match ($nomeFilme) {
    "Top Gun: Maverick" => "Ação",
    "Thor: Ragnarok" => "Super-Herói",
    "Se beber não case" => "Comédia",
    default => "Gênero desconhecido",
};

echo "O gênero do filme é: $genero \n"; */

// Aprendendo a repetir ações - loops (for, while, do ... while)

/*$cont = 1;
$somaNotas = 0;
$qntdNotas = $argc - 2;

for ($cont = 1; $cont <= $qntdNotas; $cont++) {
    $somaNotas += $argv[$cont];
}

while ($argv[$cont] != 0) {
    $somaNotas += $argv[$cont++];
}*/

/*do {
    $somaNotas += $argv[$cont++];
} while ($argv[$cont] != 0);

$notaFilme = $somaNotas / $qntdNotas;

echo "Nota do filme: $notaFilme";*/

// Aprendendo a fazer litas - arrays 

$filme = [
    "nome" => "Thor: Ragnarok",
    "ano" => 2021,
    "nota" => 7.8,
    "genero" => "super-herói",
];

echo $filme->anoLancamento;

/* $notas = [];
$qntdNotas = $argc - 1;

for ($cont = 1; $cont < $argc; $cont++) {
    $notas[] = (float) $argv[$cont];
    echo "$argv[$cont] \n";
}

$somaNotas = 0;

foreach ($notas as $nota) {
    $somaNotas += $nota;
}

$notaFilme = array_sum($notas) / $qntdNotas;
echo $notaFilme;

exibeMensagemLancamento(1990);*/

// Aprendendo funções

/*

$incluidoNoPlano = incluidoNoPlano($planoPrime, $anoLancamento);

echo $incluidoNoPlano;*/

// Manipulando arrays

/*$notas = [10, 8, 9, 7.5, 5, 6.8];

var_dump($notas);
sort($notas);
var_dump($notas);
echo min($notas);

var_dump($filme['nome']);
$posiDoisPont = strpos($filme['nome'], ':');

var_dump($posiDoisPont);

var_dump(substr($filme['nome'], 0, $posiDoisPont));*/

//mbstring();

// json
//var_dump(json_decode('{"nome":"Thor: Ragnarok","ano":2021,"nota":7.8,"genero":"super-her\u00f3i"}', true));

//$filmeComoStringJson = json_encode($filme);
//file_put_contents(__DIR__ . '/filme.json', $filmeComoStringJson);

$filme = criaFilme(
    nome: "Thor: Ragnarok", 
    anoLancamento: 2021, 
    nota: 7.8, 
    genero: "super-herói"
);

var_dump($filme);