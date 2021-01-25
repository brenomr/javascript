const idadeComprador = 19;
const acompanhado = false;
const destino = `Salvador`;

console.log(`Trabalhando com Loops\n=========================\n`);

// Lista de cidades
const listaDeDestinos = new Array(`Rio de Janeiro`, `Salvador`, `São Paulo`, `Curitiba`);

console.log(`Destinos possíveis:\n${listaDeDestinos}\n`);

// Confirmação de compra
const podeComprar = (idadeComprador >= 18  || acompanhado);

let contador = 0;
let destinoExiste = false;
// while(contador<=3){

//     if(listaDeDestinos[contador] == destino) {
//         destinoExiste = true;
//         break;
//     }
//     else {
//         destinoExiste = false;
//     }
//     contador++; // Ou contador += 1;
// }

for(contador; contador<=3; contador++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

    else{
        destinoExiste = false;
    }
}

if(destinoExiste) console.log(`Destino existe!\n`);
else console.log(`Destino não existe!\n`);

if(podeComprar && destinoExiste) {
    console.log(`Boa viagem!`);
}

else {
    console.log(`Houve um erro!`);
}