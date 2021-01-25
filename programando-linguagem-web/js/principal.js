var titulo = document.querySelector(".titulo");
titulo.textContent = "=Aparecida Nutricionista=";

var paciente = document.querySelector("#primeiro-paciente");
var nome = paciente.querySelector(".info-nome").textContent;
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
//var resultado = paciente.querySelector(".info-imc").textContent;

let alturaInvalida = (altura <= 0 || altura >= 3);
let pesoInvalido = (peso <= 0 || peso > 400);

if(alturaInvalida) {
    paciente.querySelector(".info-imc").textContent = "Altura inválida";
}

else if(pesoInvalido) {
    paciente.querySelector(".info-imc").textContent = "Peso inválido";
}

else if (!alturaInvalida && !pesoInvalido) {
    imc = peso / (altura*altura);
    paciente.querySelector(".info-imc").textContent = imc;
}

else {
    paciente.querySelector(".info-imc").textContent = "Erro";
}