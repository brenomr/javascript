export class Cliente{
    constructor(nome,cpf, senha, autenticar){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    get cpf(){
        return this._cpf;
    }

    autenticar(senha){
        return senha == this._senha;
    }
}