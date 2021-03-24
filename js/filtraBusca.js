"use strich"
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {//Se tiver algo digitado ele roda o for.
    	for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent; 
        var expressao = new RegExp(this.value,"i");// Expressão Regular de busca com parâmetros.	

        if (!expressao.test(nome)){//
        	paciente.classList.add("invisivel");
        }else{
        	paciente.classList.remove("invisivel");
        }
   		}
    }else{
    	for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
        
    }
	}   
});