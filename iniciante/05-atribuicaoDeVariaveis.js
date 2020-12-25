console.log("Trabalhando com atribuição de variáveis");

const primeiroNome = "Pedro";
const sobrenome = "Silva";
let idade = 30;

console.log(primeiroNome, sobrenome, idade);
console.log(primeiroNome + " " + sobrenome + " " + idade);

/*O uso de CRASE permite a inserção de variáveis sem
a necessidade de utilizar aspas e sinal de mais */
idade = idade+2;
console.log(`Meu nome é ${primeiroNome} ${sobrenome} e tenho ${idade} anos`);

const nomeCompleto = primeiroNome + " " + sobrenome;

console.log(nomeCompleto);
console.log("O PRÓXIMO ERRO É PROPOSITAL!")
console.log("============================")

/* Criando erro ao tentar substituir a constante 'nome'; Ela
precisa ser uma variável do tipo let para aceitar alterações */
primeiroNome = nomeCompleto;