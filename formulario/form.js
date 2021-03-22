var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

 event.preventDefault();//(Boas práticas.

	var form = document.querySelector("#form-adiciona");

	var paciente = obtemPacienteDoFormulario(form);
   var pacienteTr = montaTr(paciente);

   var erros = validaPaciente(paciente);

   if(erros.length > 0){
      exibiMensagensDeErro(erros);    
      return;
   }

	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

   form.reset();//Boas Práticas.
   var  mensagensErro = document.querySelector('#mensagens-erro');
   mensagensErro.innerHTML = "";//Controla o HTML a não repetir os erros.
});

function adicionaPacienteNaTabela(paciente){
   var pacienteTr = montaTr(paciente); 
   var tabela = document.querySelector("#tabela-pacientes");
   tabela.appendChild(pacienteTr);
}

function exibiMensagensDeErro(erros){
   var ul = document.querySelector("#mensagens-erro");
   ul.innerHTML = "";//Controla o HTML a não repetir os erros e conforme forem corrigidos irão sair da tela do usuário.
   erros.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
   });
}

function obtemPacienteDoFormulario(form) {
   var paciente =  {//Criando Objetos e diminuindo variáveis.
      nome: form.nome.value,
      peso: form.peso.value,
      altura:form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value,form.altura.value)
   }

   return paciente;  
}

function montaTr(paciente) {//Cria a tr e td do paciente e anexando a tr
   var pacienteTr = document.createElement("tr");
   pacienteTr.classList.add('paciente');
   
   pacienteTr.appendChild(montaTd(paciente.nome,'info-nome'));
   pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'));
   pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
   pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'));  
   pacienteTr.appendChild(montaTd(paciente.imc,'info-imc'));

   return pacienteTr;
}

function montaTd(dado,classe) {
   var td = document.createElement("td");
   td.textContent = dado;
   td.classList.add(classe);
   return td;
}

function validaPaciente(paciente){

   var erros = [];//Array's

   if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!");
   if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");

   if(paciente.nome.length == 0){
      erros.push('O Nome não pode ser em branco!');
   }

   if(paciente.gordura.length == 0){
      erros.push("A Gordura não pode ser em branco");
   }

   if(paciente.peso.length == 0){
      erros.push('O Peso não pode ser em branco');
   }

   if(paciente.altura.length == 0){
      erros.push('A Altura não pode ser em branco');
   }

   return erros;
}