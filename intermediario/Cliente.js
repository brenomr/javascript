export class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){ // Com o construtor os objetos podem ser instanciados com os valores sendo passados
        this.nome = nome;   // diretamente no instanciamento sem a necessidade de configurar linha a linha
        this._cpf = cpf;
    }
}