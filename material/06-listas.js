console.log(`Trabalhando com listas`);
console.log(`======================`);

//CTRL+K+C = comenta a seleção
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Destinos possíveis:`);
// console.log(salvador, saoPaulo, rioDeJaneiro);

//Array = lista. Como definir:
const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

// Adicionar um item na lista após ser declarada
listaDeDestinos.push(`Curitiba`);

/* Remover um item da lista (1 = posição inicial
da remoção, 1 = qtos elementos após a posição inicial),
lembrando que array começa a contar de zero */
listaDeDestinos.splice(1,1);

// Exibe a lista toda
console.log(listaDeDestinos);

// Acessar um item da lista, começando de zero!
console.log(listaDeDestinos[1]);

/*
OBSERVAÇÃO:
Embora a lista seja uma CONSTANTE, os itens dentro
dela podem ser alterados, o que não pode é a 'variável'
ser alterada, como por exemplo: listaDeDestinos = 25;
*/