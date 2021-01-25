const idadeComprador = 18;
const acompanhado = false;
var possuiPassagem = false;

console.log(`Trabalhando com condições\n=========================\n`);

const listaDeDestinos = new Array(
    `Rio de Janeiro`, `Salvador`, `São Paulo`, `Curitiba`);

// && => and ; || => or ; ! => not
if(idadeComprador >= 18  || acompanhado) {

    //Remove item from array
    listaDeDestinos.splice(3,1);

    if(acompanhado) { console.log(`Comprador acompanhado`); }

    console.log(`Venda efetuada!\n`);
    console.log(`Destinos possíveis: \n${listaDeDestinos}\n`)
    possuiPassagem = true;
}

else { console.log(`Venda não efetuada!\nComprador menor de idade e desacompanhado!\n`); }

console.log("======== EMBARQUE ========");

if(possuiPassagem && (idadeComprador >= 18 || acompanhado)) { console.log("Boa viagem!"); }

else {
    if(possuiPassagem) {console.log(`Menor de idade precisa estar acompanhado!`)}
    else {console.log(`Não possui passagem!`)}
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

