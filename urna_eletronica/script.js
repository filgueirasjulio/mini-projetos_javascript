//variaveis de controle de interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let imagensCandidatos = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

//variaveis de controle de ambiente
let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

    for(let i = 0; i < etapa.numeros; i++) {

        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    imagensCandidatos.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];

    let candidato = etapa.candidatos.filter((item)=> {
        if (item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });

    if (candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

        let fotosHtml = '';

        for (let i in candidato.fotos) {
            fotosHtml = `<div class="d-1-image"> <img src="images/${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda} </div>`;
        }

        imagensCandidatos.innerHTML = fotosHtml;
    }
}

function clicou(n) {

   let elementoNumero = document.querySelector('.numero.pisca');

   if (elementoNumero !== null) {
       elementoNumero.innerText = n;
       numero = `${numero}${n}`;

       elementoNumero.classList.remove('pisca');

       if (elementoNumero.nextElementSibling != null) {
            elementoNumero.nextElementSibling.classList.add('pisca');
       } else {
            atualizaInterface();
       }   
   } 
}

function branco() {
    alert("Clicou em BRANCO!");
}

function corrige() {
    alert("Clicou em CORRIGE!");
}

function confirma() {
    alert("Clicou em CONFIRMA!");
}

comecarEtapa()