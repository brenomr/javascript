var titulo = document.querySelector(".titulo");
titulo.textContent = "=Aparecida Nutricionista=";

// Para buscar 1 item
//var paciente = document.querySelector("#primeiro-paciente");

// querySelectorAll retorna um array com todos os itens de mesmo ID
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var nome = paciente.querySelector(".info-nome").textContent;
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    let alturaValida = validaAltura(altura);
    let pesoValido = validaPeso(peso);

    if(!alturaValida) {
        paciente.querySelector(".info-imc").textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    else if(!pesoValido) {
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    else if (alturaValida && pesoValido) {
        var imc = calculaImc(peso,altura)
        paciente.querySelector(".info-imc").textContent = imc;
        console.log(imc);
    }

    else {
        paciente.querySelector(".info-imc").textContent = "Erro";
    }
}

function validaPeso(peso) {
    return (peso > 0 && peso < 300);
}

function validaAltura(altura) {
    return (altura > 0 && altura <= 3);
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

let botaoAdicionar = document.querySelector("#adicionar-paciente");


//function teste() { console.log('btn clicado')} ---> botaoAdicionar.addEventListener("click", teste); ---> não chamar a função dentro do eventlistener como func() e sim func