pizzaJson.map((item, index) => {
    //---- LOGICA DE EXIBIÇÃO DA LISTA DE PIZZAS ----//

    //clonamos a estrutura html que será base para a exibição de cada pizza
   let pizzaItem = d('.models .pizza-item').cloneNode(true);

   //inserindo as informações das pizzas no modelo clonado  
   pizzaItem.setAttribute('data-key', index);
   pizzaItem.querySelector('.pizza-item--img img').src = item.img;
   pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price[0].toFixed(2)}`;
   pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
   pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

   //agora inserimos cada modelo clonado com suas informações na div .pizza-area
   d('.pizza-area').append(pizzaItem);

    //---- LOGICA DE EXIBIÇÃO DAS PIZZAS NOS MODAIS ----//

   pizzaItem.querySelector('a').addEventListener('click', (event) => {
       event.preventDefault();
       key = event.target.closest('.pizza-item').getAttribute('data-key'); //ao clicar, atras vez do closest  vamos pro elemento mais proximo e pegmaos o valor do seu atributo

        modalQuantidade = 1;

        //inserindo as informações no modal
        d('.pizzaBig img').src = pizzaJson[key].img;
        d('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        d('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        d('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price[0].toFixed(2)}`;
        d('.pizzaInfo--size.selected').classList.remove('selected');

        da('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2) { //para que sempre abrir o modal, o tamanho grande esteja selecionado
                size.classList.add('selected');
            }

            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        d('.pizzaInfo--qt').innerHTML = modalQuantidade;

       //agora abriremos o modal
       d('.pizzaWindowArea').style.opacity = 0  //incialmente o modal é aberto mas nao fica visivel
       d('.pizzaWindowArea').style.display = 'flex'
       setTimeout(()=> {
        d('.pizzaWindowArea').style.opacity = 1 //depois de meio segundo ele surge, de uma forma mais suave.
       }, 500)
    }); 
});