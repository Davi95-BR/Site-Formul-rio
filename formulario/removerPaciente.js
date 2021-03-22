var paciente = document.querySelectorAll(".paciente");

var tabela  = document.querySelector("#tabela-pacientes");

tabela.addEventListener('dblclick', function(event) {

	event.target.classList.add("fadeOut");//Acessando uma classe do CSS.

    if (event.target.tagName == 'TD') {//Se a tag for td executa a função.

	setTimeout(function(){//Aguarda a execução da função.
		event.target.parentNode.remove()//Remoção
    },600)};//tempo a ser executado.
});
