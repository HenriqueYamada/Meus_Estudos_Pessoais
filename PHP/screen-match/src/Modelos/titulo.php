<?php

class Titulo 
{ //herança
    private float $media;
    private array $notas = []; //usado apenas para a própria clss

    public function __construct(
        public readonly string $nome, 
        public readonly int $anoLancamento, 
        public readonly Genero $genero
        ) { //método construct: chamado automaticamente quando um objeto é instanciado (não pode ter um tipo de retorno)
        $this->notas = []; // qualquer inicialização é colocado no construct
    } //readonly - são publicas para leituras e privadas para mudança (um só vez)

    public function avalia(float $nota): void {
        $this->notas[] = $nota;
    }

    public function media(): float {
        $somaNotas = array_sum($this->notas);
        $qntdNotas = count($this->notas);

        return $somaNotas / $qntdNotas;
    }
}