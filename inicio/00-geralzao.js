//Uma constante nome
const nome = "Joãozinho";

//Uma variável sobrenome com alteração
let sobrenome = "Silva";
sobrenome = "da Silva";

//Impressão simples dos dados sem uso do + para concatenação
console.log(`Oi eu sou o ${nome} ${sobrenome}.`);

//Utilizar sempre pontos para separar casas decimais
let numA = 10.5;
let numB = 12.33;

console.log(numA + numB);

//Conversão para inteiros
console.log(parseInt(numA) + parseInt(numB));

//CTRL+K+C = comenta a seleção

//ARRAY = lista
const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);