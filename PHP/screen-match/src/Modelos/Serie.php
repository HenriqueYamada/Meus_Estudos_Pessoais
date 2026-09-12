<?php

class Serie extends Titulo{ 
    public function __construct(
        string $nome, 
        int $anoLancamento, 
        Genero $genero,
        public readonly int $temporadas,
        public readonly int $episodiosPorTemporada,
        public readonly int $minutosPorEpisodio,
        ) {

    }
}