<?php

// 1 - No arquivo que possui a mensagem de sucesso após exportar o arquivo, leia o arquivo exportado e exiba todas as informações do filme.

$conteudo = file_get_contents('filme.json');
$filme = json_decode($conteudo, true);

<!DOCTYPE html>
<html>
<head>
    <title>Filme inserido</title>
</head>
<body>
    <h1><?= $filme['nome']; ?></h1>
    <dl>
        <dt>Ano de lançamento</dt>
        <dd><?= $filme['anoLancamento']; ?></dd>

        <dt>Nota</dt>
        <dd><?= $filme['nota']; ?></dd>

        <dt>Gênero</dt>
        <dd><?= $filme['genero']; ?></dd>
    </dl>
</body>
</html>