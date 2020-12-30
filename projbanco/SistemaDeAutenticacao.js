export class SistemaDeAutenticacao{

    static login(autor, senha){
        if(SistemaDeAutenticacao.autenticavel(autor)){ // 1
            return autor.autenticar(senha); // 2
        }

        else {
            return false;
        }

    }

    static autenticavel(autor){ // 3
       return "autenticar" in autor && autor.autenticar instanceof Function;
    }
}

// 1
// Se der false, o objeto não tem a função e o autor não pode logar, se der true ele vai checar
// através do .autenticar se a senha do autor está correta, se sim ele loga, senão não pdoe logar
// 2
// Tratar diversos objetos diferentes de maneira semelhante e mesmo acessar propriedades desses
// objetos é algo que pode descrever o POLIMORFISO
// 3
// Verificador para função .autenticar (diz se o objeto tem essa função)
// As verificações do return: Na 1ª checa se 'autenticar' está nos atributos ou métodos do autor,
// na 2ª checa se '.autenticar' é uma função (método) do autor, comparando na instancia de Function
// pode ser comparado com instancias própias já utilizadas, exemplo: Conta.js

// Alguns verificadores de PROVA REAL no comportamento de .autenticavel
// static autenticavel(autor){ // 3
//     if ("autenticar" in autor && autor.autenticar instanceof Function){
//         return true;
//     }
//     else{
//         console.log("Para aut em autor: " + ("autenticar" in autor));
//         console.log("Para aut em instancia: " + (autor.autenticar instanceof Function));
//         return false;
//     }
//  }