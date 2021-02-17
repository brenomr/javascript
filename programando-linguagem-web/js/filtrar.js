var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        pacientes.forEach(element => {
            var paciente = element;
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            // Retorna verdadeiro se parte da expressão for igual no input
            // então a lógica precisa ser inversa: invisível se diferente
            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            }

            else {
                paciente.classList.remove("invisivel");
            }
        });
    }

    else {
        pacientes.forEach( element => {
            var paciente = element;
            paciente.classList.remove("invisivel");
        })
    }
});