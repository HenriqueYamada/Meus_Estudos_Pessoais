<?php

class Filme extends Titulo {
    public function __construct(
        string $nome, 
        int $anoLancamento, 
        Genero $genero,
        public readonly int $duracaoEmMinutos
        ) { //método construct: chamado automaticamente quando um objeto é instanciado (não pode ter um tipo de retorno)
            parent::__construct($nome, $anoLancamento, $genero); //permite o acesso a metodos da classe base/mãe

    }

    /*
    Método getter, para podermos ler o ano de lançamento

    public function anoLancamento(): int { // getter - recuperador (getAnoLancamento ())
        return $this->anoLancamento;
    }

    Método setter, para que possamos alterar o ano de lançamento

    public function defineAnoLancamento(int $anoLancamento): void {
        $this->anoLancamento = $anoLancamento; // o $anoLancamento é definido dentro deste método, já que a propriedade é privada, que só pode ser alterada dentro dessa classe, e não exteriormente
    }

    public function nome(): string {
        return $this->nome;
    }

    public function genero(): string {
        return $this->genero;
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------//

    para os nomes:

    public function nome(): string { //getter
        return $this->nome;
    }

    public function defineNome(string $nome): void { //setter
        $this->nome = $nome;
    }

    //para o genero

    public function genero(): string { //getter - mostrar e passar o dado que é privado
        return $this->$genero;
    }

    public function defineGenero(string $genero): void { //setter - define uma novo valor 
        $this->genero = $genero;
    }*/
}