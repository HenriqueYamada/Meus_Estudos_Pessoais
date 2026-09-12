<?php

// 1) Crie uma enum em PHP com tipos de contas bancárias e implemente um método informando se a conta possui taxas. Contas correntes e de investimento possuem taxas, enquanto contas poupança e universitárias não;

/*enum Conta {
    case ContaCorrente;
    case Investimento;
    case ContaPoupanca;
    case Universitarias;
}

class ContaBancaria {
    public function possuiTaxa(): bool {
        return match($this) {
            Conta::ContaCorrente, Conta::Investimento => true,
            Conta::ContaPoupanca, Conta::Universitaria => false,
        };
    }
}*/

// 2) Crie uma classe que represente uma conta com as propriedades saldo, nome do titular e tipo. Use os tipos e formas de acesso adequadas.

enum TipoConta {
    case ContaCorrente;
    case Investimento;
    case ContaPoupanca;
    case Universitarias;
}

class Conta {
    private int $saldoEmCentavos,

    public function __construct(
        public readonly string $nomeTitular,
        public readonly TipoConta $tipo,
    ) {
        $this->saldoEmCentavos = 0;
    }

     public function depositar(int $valorADepositar): void
    {
        if ($valorADepositar > 0) {
            $this->saldoEmCentavos += $valorADepositar;
        }
    }

    public function sacar(int $valorASacar): void
    {
        if ($valorASacar > 0 && $valorASacar < $this->saldoEmCentavos) {
            $this->saldoEmCentavos -= $valorASacar;
        }
    }
}