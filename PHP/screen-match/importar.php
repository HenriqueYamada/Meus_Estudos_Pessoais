<?php

$caminhoArquivo = __DIR__ . '/filme.json'; // importar arquivo filme.php
$conteudoArquivo = file_get_contents($caminhoArquivo); // vai pegar o conteúdo do arquivo
$filme = json_decode($conteudoArquivo, true); // trasnformando em array associativo (com 'nomes')

var_dump($filme);