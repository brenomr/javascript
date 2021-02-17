
// var pacientes = document.querySelectorAll(".paciente");
// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function() {
//         console.log("Click ocorreu");
//         this.remove();
//     })
// });

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", (event) => {
    // var alvoDoEvento = event.target;
    // var paiDoAlvo = event.target.parentNode;
    // paiDoAlvo.remove();
    event.target.parentNode.classList.add("fadeout");
    
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500)
});