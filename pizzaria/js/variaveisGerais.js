const d = (element) => document.querySelector(element);
const da = (element) => document.querySelectorAll(element);
const cart = [];

let key;
let size = parseInt(d('.pizzaInfo--size.selected').getAttribute('data-key'));