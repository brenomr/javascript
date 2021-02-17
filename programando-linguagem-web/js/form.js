botaoAdicionar.addEventListener("click", (event) => { // Lembrar de declarar o event para execuar a função
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obterPacienteForm(form);
    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente)

    form.reset();
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);

    // Adiciona o paciente a tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}

function obterPacienteForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    return paciente;
}

// Cria TR e TD do paciente
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,  "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,  "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,  "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}

function validaPaciente(paciente) {

    erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O nome não pode ser vazio.");
    }

    if(paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser vazia.");
    }

    // Se peso for inválido
    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido.");
    }

    // Se altura for inválida
    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}