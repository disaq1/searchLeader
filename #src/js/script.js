function btnToggle(inCart) {
  inCart.classList.toggle('inCart');
  if (inCart.classList.contains('inCart')) {
    inCart.innerText = 'в корзине'
  } else {
    inCart.innerText = 'добавить в корзину'
  }
}