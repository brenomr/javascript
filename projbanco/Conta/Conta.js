import { Cliente } from "./../Cliente.js";

// Classe abstrata, só pode ser herdada
export class Conta{
    constructor(agencia, cliente, saldoInicial){

        // Erro lançado na tentativa de instanciar uma Conta diretamente
        if(this.constructor == Conta){
            throw new Error("Atenção! Não instancie diretamente uma classe abstrata (Conta).");
        }
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    // VERIFICAR o comportamento, pois o modo construtor não verifica se o parametro cliente é um objeto de Cliente
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

        // Erro lançado na tentativa de utilizar o método abstrato. O comportamento dele deve ser descrito na classe filha
        throw new Error("Atenção! O método sacar() é abstrato, defina o comportamento para evitar este erro.");
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

// ANOTAÇÕES
// console.log(this.constructor); // Código útil para mostrar quais classes filhas chamam este construtor, jogar no constructor da Conta

// Método antes de ser substituído pelo modo abstrato
// sacar(valor){
//     let taxa = 1;
//     return this._sacar(valor,taxa);
// }