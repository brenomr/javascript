import { Cliente } from "./Cliente.js";
// let contaTotal = 0; ***** Para contagem total e posição atual de cada instancia

export class ContaCorrente{
    // contaAtual = contaTotal += 1; ***** Para contagem total e posição atual de cada instancia
    static numeroDeContas = 0;
    agencia;

    _cliente;
    _saldo = 0; // Por convenção atributos iniciados com '_' são considerados PRIVADOS

    // 'GETTERS'/'SETTERS' permitem trabalhar com atributos sem que o privado seja diretamente manipulado, provendo ENCAPSULAMENTO
    set cliente(valor){                 // Bloco 'SETando' (guardando) a informação enviada através de cliente p/ _cliente, desde que
        if(valor instanceof Cliente){   // atenda a regra, que verifica (instanceof) se o valor em cliente é uma instancia de Cliente
            this._cliente = valor;
        }
    }

    get cliente(){  // Sem GET ñ é possível 'pegar' os valores de cliente, ele será considerado undefined e _cliente ñ deve ser usado fora da classe
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    /* get numeroTotal(){ ***** Para contagem total e posição atual de cada instancia
        return contaTotal;
    }

    get numeroAtual(){ ***** Para contagem total e posição atual de cada instancia
        return this.contaAtual;
    } */

    constructor(agencia,cliente){
        this.agencia = agencia;
        this.cliente = cliente; // É bom manter o uso de cliente - definido no set - pois ele já faz uso da regra deste set
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(valor>this._saldo){
            return "Saldo insuficiente para este saque.";
        }
        else{
            this._saldo -= valor;
            return `Você sacou R$ ${valor}.`;
        }
    }

    depositar(valor){
        if(valor <= 0){
            console.log("O valor do depósito precisa ser maior que zero!");
            return 0;
        }
        else{
            this._saldo += valor;
            return this._saldo;
        }
     }

     transferir(valor,conta){
         const transferencia = this.sacar(valor);
         conta.depositar(transferencia);
         return this._saldo;
     }
}

// ========= Modelo de CC com exibição do console no método =========
// ========= mais completo, mais complexo, melhor deixar a  =========
// ========= exibição para as chamadas na index             =========
// Discussão proposta de atributo privado: https://github.com/tc39/proposal-class-fields

// export class ContaCorrente{
//     agencia;
//     _saldo = 0;
//                 

//     sacar(valor){
//         if(valor>this._saldo){
//             return 0;
//             //console.log("\nERRO: saque é superior ao saldo!")
//             //console.log(`Tentou sacar R$ ${valor}, mas saldo é de R$ ${this._saldo}.\n`)
//         }
        
//         else{
//             this._saldo -= valor; // Mesmo que: this.saldo - valor;
//             return valor;
//             //console.log(`Saque de R$ ${valor} realizado com sucesso! Saldo atual é de R$ ${this._saldo}.\n`);
//         }
//     }

//     deposito(valor){

//         if(valor <= 0){
//             console.log("O valor do depósito precisa ser maior que zero!");
//             return 0;
//         }
//         else{
//             this._saldo += valor;
//             return this._saldo;
//             //console.log(`\nFoi depositado R$ ${valor} e o saldo atual é R$ ${this._saldo}.`);
//         }
//      }
// }