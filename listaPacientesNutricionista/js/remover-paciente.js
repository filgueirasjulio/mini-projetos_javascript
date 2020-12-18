var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener("dblclick", function(event){
   if(confirm("Deseja realmente remover o paciente ?")){
    var alvoEvento = event.target; //seleciona o alvo clicado, no caso uma td
    var paiDoAlvo = alvoEvento.parentNode; //seleciona o pai do alvo clicado, no caso, a tr
    paiDoAlvo.remove(); //remove a tr
   }
});