<?php

class ContaBancaria
{
    private int $saldo;

    public function sacar(int $valorASacar): void
    {
        if ($valorASacar > 0 && $this->saldo >= $valorASacar) {
            $this->saldo -= $valorASacar;
        }
    }

    public function depositar(int $valorADepositar): void
    {
        if ($valorADepositar > 0) {
            $this->saldo += $valorADepositar;
        }
    }
    public function consultarSaldo(): float
        {
            return $this->saldo;
        }
}

class ContaCorrente extends ContaBancaria
{
    // 0.5%
    private const float TAXA_SAQUE = 0.005;
    // R$ 5,00
    private const float TARIFA_MENSAL = 5_00;

    public function cobrarTarifaMensal(): void
    {
        $this->saldo -= self::TARIFA_MENSAL;
    }

    #[Override]
    public function sacar(int $valorASacar): void
    {
        $saqueTotal = $valorASacar + $valorASacar * self::TAXA_SAQUE;

        if ($saqueTotal > 0 && $this->saldo >= $saqueTotal) {
            $this->saldo -= $saqueTotal;
        }
    }
}