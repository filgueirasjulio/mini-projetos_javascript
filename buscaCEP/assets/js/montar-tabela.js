var corpoTabela = $(".table").find("tbody");

$("#botao-incluir").click(function(event){
    event.preventDefault();

    var novaLinha = criarLinha();

    corpoTabela.append(novaLinha);  

    //atribuindo mascaras
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $(".data").mask("99/99/9999");

    requisicaoCEP();
});

$("#botao-salvar").click(function(event){
    event.preventDefault();
    salvaDados();
    //limparInputs();
});

$("#botao-limpar").click(function(event){
    event.preventDefault();
    limparInputs();
});

corpoTabela.on("dblclick", function(){
    if(confirm("Deseja mesmo remover essa linha ?")){
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode;
        paiDoAlvo.remove();
    }
});

function criarLinha(){
    var linha = $("<tr class='funcionarios'>");
    var inputNome = $("<input type='text' name='nome' class='nome'>");
    var inputData = $("<input type='text' name='data' class='data'>");
    var inputCPF = $("<input type='text' name='cpf' class='cpf'>");
    var inputCEP = $("<input type='text' name='cep' class='cep'>");
    var inputUF = $("<input type='text' name='uf' class='uf'>");
    var inputBairro = $("<input type='text' name='bairro' class='bairro'>");
    var inputLogradouro = $("<input type='text' name='logradouro' class='logradouro'>");
    var inputCidade = $("<input type='text' name='cidade' class='cidade'>");
    //var inputComplemento = $("<input type='text' name='complemento' class='complemento'>");

    var colunaNome = $("<td>").append(inputNome);
    var colunaData = $("<td>").append(inputData);
    var colunaCPF = $("<td>").append(inputCPF);
    var colunaCEP = $("<td>").append(inputCEP);
    var colunaUF = $("<td>").append(inputUF);
    var colunaBairro = $("<td>").append(inputBairro);
    var colunaLogradouro = $("<td>").append(inputLogradouro);
    var colunaCidade = $("<td>").append(inputCidade);
    //var colunaComplemento = $("<td>").append(inputComplemento);
 
    linha.append(colunaNome);
    linha.append(colunaData);
    linha.append(colunaCPF);
    linha.append(colunaCEP);
    linha.append(colunaUF);
    linha.append(colunaBairro);
    linha.append(colunaLogradouro);
    linha.append(colunaCidade);

    return linha;
}

function salvaDados()
{
    var funcionarios = $('.funcionarios');
	var lista = [];
    $.each(funcionarios, function(index, val){
        lista.push({
            "nome":  $(val).find('input[name=nome]').get(0).value,
            "data": $(val).find('input[name=data]').get(0).value,
            "cpf": $(val).find('input[name=cpf]').get(0).value,
            "cep": $(val).find('input[name=cep]').get(0).value,
            "uf": $(val).find('input[name=uf]').get(0).value,
            "bairro": $(val).find('input[name=bairro]').get(0).value,
            "logradouro": $(val).find('input[name=logradouro]').get(0).value,
            "cidade": $(val).find('input[name=cidade]').get(0).value
            //"complemento": $(val).find('input[name=complemento]').get(0).value,
        })
    });
    
    console.log(lista);
}
function limparInputs()
{
    $(".nome").val(" ");
    $(".data").val(" ");
    $(".cpf").val(" ");
    $(".cep").val(" ");
    $(".cidade").val(" ");
    $(".logradouro").val(" ");
    $(".bairro").val(" ");
    $(".uf").val(" ");
}




