var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();//Requisição.

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//Abrindo.

    xhr.addEventListener("load", function() {//Criando Evento.
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {//Dando certo
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);//Dando certo.
            });
        } else {//Caso Contrário.
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});

	
