var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", function() {

    // Realiza requisição HTTP
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        
        var erro = document.querySelector("#erro-ajax");

        if(xhr.status == 200) {
            erro.classList.add("invisivel");

            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(element => {
                adicionaPacienteNaTabela(element);
            });
        }

        else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.classList.remove("invisivel");
        }
        
    })

    xhr.send();
    
});