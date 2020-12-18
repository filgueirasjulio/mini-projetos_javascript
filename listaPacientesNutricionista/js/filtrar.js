var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value); //o this se refere ao campo filtro
    var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0) //caso algo seja digitado
    {
        for(var i = 0; i <= pacientes.length; i++) { 
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i") //O i significa que a busca aceita letras maiúsculas e minúsculas
            if(!expressao.test(nome)){ //ele testa letra por letra da variavel nome, que recebe o conteudo da td que contém os nomes dos pacientes
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {  //caso o que for digitado seja apagado
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]; 
            paciente.classList.remove("invisivel");
        }
    }
});