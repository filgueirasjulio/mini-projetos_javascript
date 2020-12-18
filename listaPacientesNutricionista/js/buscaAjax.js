var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") //abre a conexão, informa o tipo de requisição e o endereço da api

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText; //respostas da requisição

        var pacientes = JSON.parse(resposta); //transforma a resposta vinda em JSON para um array em JS

        pacientes.forEach( function(paciente) {
                adicionaPacienteNaTabela(paciente);
        });
    } else {
        console.log(xhr.status);
        console.log(xhr.responseText);
        erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});