//função para fechar modal
function closeModal() {
    d('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=> {
        d('.pizzaWindowArea').style.display = 'none';
    }, 500)
}

//aplicando a função de fechar modal
da('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});

//funções para aumentar e diminuir a quantidade de pizzas
d('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQuantidade > 1 ) {
        modalQuantidade--;
        d('.pizzaInfo--qt').innerHTML = modalQuantidade;
    }
})

d('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQuantidade++;
    d('.pizzaInfo--qt').innerHTML = modalQuantidade;
})

//selecionando o item de tamanho da pizza 
da('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', ()=>{
        d('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');

        //para que sempre abrir o modal, o tamanho grande esteja selecionado
        if(sizeIndex == 2) { 
            size.classList.add('selected');
           
        }
    });    
});

  //para mudar o valor da pizza ao clicar no tamanho
    d('#pequena').addEventListener('click', ()=>{
        d('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price[2].toFixed(2)}`;
    });

    d('#media').addEventListener('click', ()=>{
        d('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price[1].toFixed(2)}`;
    });

    d('#grande').addEventListener('click', ()=>{
        d('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price[0].toFixed(2)}`;
});