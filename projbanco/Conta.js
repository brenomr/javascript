import { Cliente } from "./Cliente.js";

export class Conta{
    constructor(agencia, cliente, saldoInicial){
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    set cliente(valor){
        if (valor instanceof Cliente){
            this._cliente = valor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        let taxa = 1;
        return this._sacar(valor,taxa);
    }

    _sacar(valor,taxa){
        const valorSaque = valor * taxa;
        if(this._saldo >= valorSaque){
            this._saldo -= valorSaque;
            return valorSaque; // Retorna o sacar
        }

        else{
            return 0;
        }
    }

    depositar(valor){
        if (valor > 0){
            this._saldo += valor;
            return `Depósito de R$ ${valor} realizado!`;
        }

        else{
            return "Valor precisa ser maior que zero!";
        }
    }

    transferir(valor,conta){
        if (this.sacar(valor) > 0){
            conta.deposito(valor);
            return "Depósito realizado!";
        }

        else{
            return "Depósito não realizado";
        }
    }
}