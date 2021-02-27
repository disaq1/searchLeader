

//Функция для смены класса кнопки по нажатию

function btnToggle(inCart) {
  inCart.classList.toggle('inCart');
  if (inCart.classList.contains('inCart')) {
      inCart.innerText = 'В корзине';
  } else {
      inCart.innerText = 'Добавить в корзину'
  }
}

//Функция, объединяющая тоггл и добавление класса

// document.querySelector('.products__button').onclick = function(event) {
//   btnToggle(inCart);
//   document.querySelector('.cart_num').classList.add('cart_num-on');
// }

//Скрипт для открытия модального окна

document.getElementById('open-popup').onclick = function(event) {
  document.querySelector('.modal-wrap').classList.add('popup');
  document.querySelector('.modal').classList.add('popup');
}

//Скрипт для закрытия модального окна

document.getElementById('close-popup').onclick = function(event) {
  document.querySelector('.modal-wrap').classList.remove('popup');
  document.querySelector('.modal').classList.remove('popup');
}

//Скрипт для блокировки кнопки отправки формы


const form = document.querySelector('form');
const formSubmit = document.querySelector('.form-button');

function changeFormHandler() {
  if (form.checkValidity()) {
    formSubmit.removeAttribute('disabled');
    document.querySelector('.form-button').classList.add('form-btn');
  }
}
form.addEventListener('change', changeFormHandler);