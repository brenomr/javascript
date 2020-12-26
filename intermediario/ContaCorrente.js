export class ContaCorrente{
    agencia;
    cliente;

    _saldo = 0; // Por boa prática atributos com '_' são considerados PRIVADOS

    sacar(valor){
        if(valor>this._saldo){
            return 0;
        }
        else{
            this._saldo -= valor;
            return valor;
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

     consultarSaldo(){
         return this._saldo;
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