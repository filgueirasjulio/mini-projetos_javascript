function requisicaoCEP(){
    $("input[name=cep]").blur(function(){
        var cep = $(this).val().replace(/[^0-9]/, ''); //replace para só aceitar digitos entre 0 e 9
        if(cep){
            var url = "https://viacep.com.br/ws/"+ cep + "/json"; 

            $.ajax({
                url: url,
                type: "get",
                dataType: 'jsonp',
                crossDomain: true,
                contentType: "apllication/json",
                success: function(data){
                        $("input[name=logradouro]").val(data.logradouro);
                        $("input[name=bairro]").val(data.bairro);
                        $("input[name=cidade]").val(data.localidade);
                        $("input[name=uf]").val(data.uf);
                }
            })
        }
    });
}

