import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static contadorContas = 0;

    constructor(agencia, cliente){
        super(agencia, cliente, 0);
        ContaCorrente.contadorContas += 1;
    }

    // O método da classe filha sobrepõe o da classe super como no caso da taxa de saque.
    // Para evitar duplicidade de código o restante do método foi colocado em _sacar.
    // Classes filhas podem acessar métodos protegidos do respectivo super == herança.
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor,taxa);
    }
}