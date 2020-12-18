//Modificando os títulos
var tituloHeader = document.querySelector("h1.tituloHeader");
tituloHeader.innerText = `Aparecida Nutricionista`;

var tituloBody = document.querySelector("h2.tituloBody");
tituloBody.innerText = `Lista de Pacientes`;

//Calculando IMC
var pacientes = document.querySelectorAll(".paciente"); //pega um array com todas elementos que possuem a classe paciente

for(var i = 0; i < pacientes.length; i++)
{

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    
    if(!pesoValido)
    {
        console.log("Peso inválido!");
        pesoValido = false;
        tdPeso.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(!alturaValida)
    {
        console.log("Altura inválida!");
        alturaValida = false;
        tdAltura.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    
    if(pesoValido && alturaValida)
    {
        var imc = calculaImc(peso, altura);   
        tdIMC.textContent = imc;
    }

    function calculaImc(peso, altura)
    {
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }

    function validaPeso(peso)
    {
        if (peso <= 600 && peso > 0)
        {
            return true;
        } else {
            return false;
        }
    }

    function validaAltura(altura)
    {
        if((altura <= 2.50 && altura >= 0.20))
        {
            return true;
        } else {
            return false;
        }
    }
}




