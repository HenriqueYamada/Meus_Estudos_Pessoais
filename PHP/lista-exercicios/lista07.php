<?php

// 1 - Escreva um programa em PHP que abra um arquivo chamado teste.txt para ler a primeira linha e depois o fecha.

$caminhoArquivoTeste = __DIR__ . '/lista07-arquivos/teste.txt';
$texto = file_get_contents($caminhoArquivoTeste);

echo $texto;

// 2 - Escreva um programa em PHP que abra o arquivo teste.txt, acrescente a frase "PHP é incrível!" no final do arquivo e depois o feche.

$caminhoArquivoTeste = __DIR__ . '/lista07-arquivos/teste.txt';
$texto = file_get_contents($caminhoArquivoTeste);

echo $texto;

// 3 - Crie um programa que converta a string '{"nome":"Vinicius","anoNascimento":1997,"profissao":"Dev"}' em um objeto.

$caminhoArquivoTeste = __DIR__ . '/lista07-arquivos/index.json';
$texto = file_get_contents($caminhoArquivoTeste);
var_dump(json_decode($texto), true); 