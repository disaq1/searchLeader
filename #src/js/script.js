function btnToggle(inCart) {
  inCart.classList.toggle('inCart');
  if (inCart.classList.contains('inCart')) {
    inCart.innerText = 'В корзине'
  } else {
    inCart.innerText = 'Добавить в корзину'
  }
}