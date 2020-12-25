class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(valor>this.saldo){
            console.log("\nERRO: saque é superior ao saldo!")
            console.log(`Tentou sacar R$ ${valor}, mas saldo é de R$ ${this.saldo}.\n`)
        }
        
        else{
            this.saldo -= valor; // Mesmo que: ccFernando.saldo - valor;
            console.log(`Saque de R$ ${valor} realizado com sucesso! Saldo atual é de R$ ${this.saldo}.\n`);
        }
    }

    deposito(valor){
        this.saldo += valor;
        console.log(`\nFoi depositado R$ ${valor} e o saldo atual é R$ ${this.saldo}.\n`);
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Fernando";
cliente1.cpf = 12312312332;

const cliente2 = new Cliente();
cliente2.nome = "Barbara";
cliente2.cpf = 32112332124;


const ccFernando = new ContaCorrente();
ccFernando.agencia = 1001;
ccFernando.saldo = 50;

ccFernando.deposito(300);
ccFernando.sacar(100);


const ccBarbara = new ContaCorrente();
ccBarbara.agencia = 2002;
ccBarbara.saldo = 0;