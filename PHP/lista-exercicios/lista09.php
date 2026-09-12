<?php

class Conta
{
    private int $saldoEmCentavos;
    private string $nomeTitular;
    private string $numeroConta;

    public function setSaldoEmCentavos(int $saldoEmCentavos): void
    {
        $this->saldoEmCentavos = $saldoEmCentavos;
    }

    public function getSaldoEmCentavos(): int
    {
        return $this->saldoEmCentavos;
    }

    public function setNomeTitular(string $nomeTitular): void
    {
        $this->nomeTitular = $nomeTitular;
    }

    public function getNomeTitular(): string
    {
        return $this->nomeTitular;
    }

    public function setNumeroConta(int $numeroConta): void
    {
        $this->numeroConta = $numeroConta;
    }

    public function getNumeroConta(): string
    {
        return $this->numeroConta;
    }

    // Solução saque e depósito:

    public function setSaque(int $dinheiro): void {
        if ($dinheiro > 0) { $this->getSaldoEmCentavos -= $dinheiro;};
    }

    public function setDeposito(int $dinheiro): void {
        if ($dinheiro > 0) { $this->getSaldoEmCentavos += $dinheiro;};
    }
}