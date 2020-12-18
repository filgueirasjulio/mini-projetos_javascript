//Adicionando novos pacientes

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //previne o comportamento padrão do HTML que é recarregar a página ao enviar

    var formulario = document.querySelector("#form-adiciona-paciente");

    //capturar os valores de cada input
    var paciente = obterDadosDosInputs(formulario);

    //verifica se o peso e altura obtidos dos inputs anteriormentes são validos
    var erros = validaPaciente(paciente);

    if (erros.length > 0) //se a string for maior que zero, significa que é a mensagem de erro, ou seja, que validaPaciente é false
    {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
   
    var exibeMensagensErro = document.querySelector("#mensagens-erro");
    exibeMensagensErro.innerHTML = "";
    formulario.reset();
});

function obterDadosDosInputs(formulario)
{
    var paciente = {
        nome:  formulario.nome.value,
        peso : formulario.peso.value,
        altura:  formulario.altura.value, 
        gordura:  formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }

    return paciente;
}

function montarTr(paciente)
{
    //cria os elementos html
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //A tr ainda não está relacionada com as tds, precisamos inserir as tds como elementos filhos da tr
    //paralelamento já informandos que as td são filhas das trs através do appendChild
    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr
  
}

function montarTd(dado, classe)
{
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente)
{
    var erros = [];

    if(paciente.nome.length == 0)
    {
        erros.push("Informe um nome");
    }

    if(paciente.gordura.length == 0)
    {
        erros.push("Informe o percentual de gordura");
    }

    if(paciente.peso.length == 0)
    {
        erros.push("Informe o peso");
    } else  if(!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido");
    } 

    if(paciente.altura.length == 0)
    {
        erros.push("Informe uma altura");
    } else if(!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida");
    }
    return erros;
}

function exibeMensagensDeErro(erros)
{
   var ul = document.querySelector("#mensagens-erro");
   ul.innerHTML = "";
   erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
   });
}

function adicionaPacienteNaTabela(paciente) 
{
     //incluir os tds na tr
     var pacienteTr = montarTr(paciente);
  
     //inserir a tr na tabela
     var tabela = document.querySelector("#tabela-body-pacientes"); //agora selecionamos a tabela que vai receber a tr
 
     tabela.appendChild(pacienteTr); //informamos que a tr é filha da tabela, da mesma forma que informamos que as tds eram filhas da tr 
}