<?php

require __DIR__ . "/src/Modelos/Titulo.php";
require __DIR__ . "/src/Modelos/Genero.php";
require __DIR__ . "/src/Modelos/Serie.php";
require __DIR__ . "/src/Modelos/Filme.php";

echo "Bem vindo ao Screen Match";

$filme = new Filme(
    'Thor: Ragnarok',
    2021,
    Genero::SuperHeroi,
    180,
);

$filme->avalia(10);
$filme->avalia(10);
$filme->avalia(5);
$filme->avalia(5);

var_dump($filme);

echo $filme->media() . "\n";

echo $filme->anoLancamento . "\n";

$serie = new Serie('Lost', 2007, Genero::Drama, 10, 20, 30);

$serie->avalia(8);

echo $serie->media() . "\n";