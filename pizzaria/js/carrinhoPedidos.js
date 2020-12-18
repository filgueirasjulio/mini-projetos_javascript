d('.pizzaInfo--addButton').addEventListener('click', ()=>{
    let identificador = pizzaJson[key].id+'@'+size; //identifica qual pizza e tamanho sera adicionada ao carrinho
    
    let keyPizza = cart.findIndex((item)=> item.identificador == identificador);  //verifica se já há uma pizza de tamanho X no carrinho

    if(keyPizza > -1){ //se houver, apenas sera altera a quantidade daquele pizza de tamanho X
        cart[keyPizza].quantidade += modalQuantidade;
    } else { //se não houver, será adicionada o tipo de pizza ao carrinho
        cart.push({
            id:pizzaJson[key].id,
            tamanho: size,
            quantidade:modalQuantidade,
            identificador: identificador,
        });
    }
    updateCart();
    closeModal();
    window.scrollTo(0, 0);
});

//abrir o carrinho no mobile
d('.menu-openner').addEventListener('click', ()=>{
  if(cart.length > 0){
    d('aside').style.left = '0';
  }
});

//fechar o carrinho no mobile ao clixar no X
d('.menu-closer').addEventListener('click', ()=>{
    if(cart.length > 0){
      d('aside').style.left = '100vw';
    }
});

function updateCart() {

    let subTotal = 0;
    let desconto = 0;
    let total = 0;

    d('.menu-openner span').innerHTML = cart.length; //alterar o icone do carrinho na versão mobile

    if(cart.length > 0) {
        d('aside').classList.add('show');
        d('.cart').innerHTML = ''; //para que a lista de pizzas não seja repetida

        for(let i in cart) {
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);
            let cartItem = d('.models .cart--item').cloneNode(true);

            let pizzaSizeName;
            
            switch(cart[i].tamanho) {
                case 0:
                    pizzaSizeName = 'P';
                     break;
                case 1:
                    pizzaSizeName = 'M';
                     break;
                case 2:
                    pizzaSizeName = 'G';
                     break;
            }
            
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].quantidade;

            //diminuir e aumentar quantidade de pizzas no carrinho de compras
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{
                if(cart[i].quantidade > 1) {
                    cart[i].quantidade--;
                }else{
                    cart.splice(i, 1);
                }
                updateCart();
            });

            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{
                cart[i].quantidade++;
                updateCart();
            });

            //calculando o subtotal
            subTotal += pizzaItem.price[size] * cart[i].quantidade
            console.log(subTotal)

            d('.cart').append(cartItem);
        }
    } else {
        d('aside').classList.remove('show');
        d('aside').style.left = '100vw';
    }

        //calculando o desconto e o total
        desconto = subTotal * 0.1;
        total = subTotal - desconto;

        //exibindo o subtotal, desconto e total
        d('.subtotal span:last-child').innerHTML = `R$ ${subTotal.toFixed(2)}`;
        d('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        d('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
}

//fechar carrinho ao clicar em finalizar compra
d('.cart--finalizar').addEventListener('click', ()=>{
    d('aside').classList.remove('show');
    d('aside').style.left = '100vw';
    cart.length = 0;
     //apos fechar, esvaziamso o carrinhos
    d('.menu-openner span').innerHTML = cart.length;
  });