(function () {

const catalog = document.querySelector('.catalog');
const cardsHotels = document.querySelector(".catalog__wrapper");
const form = document.querySelector('.filter__form');
const allCheckboxes = form.querySelectorAll('input[type=checkbox]');
const submitBtn = form.querySelector('.filter__submit-btn');
const resetBtn = form.querySelector('.filter__reset-btn');
const priceFrom = form.querySelector('input[name="price-from"]');
const priceTo = form.querySelector('input[name="price-to"]');

const checked = {};
const checkedAll = {};

// Функция получаем данные 
const getData = async function(url) {
	const response = await fetch(url);

	if(!response.ok) {
		throw new Error(`Ошибка по адресу ${url}, 
			статус ошибки ${response.status}!`)
	}

	return await response.json();
  console.log(response.json());

}

// Функция создаем карточку отеля
function createCardHotel({ name, square, price, image, retinaImage, sizes, equipment }) {

	const card = document.createElement('article');
	card.classList.add('catalog__item');
	card.classList.add('card');

	card.insertAdjacentHTML('beforeend', `
          <a class="card__link" href="#">
            <img class="card__img" src="${image}" srcset="${retinaImage} 2x" alt="${name}" width="270" height="185">
          </a>
          <div class="card__wrapper">
            <h3 class="card__title">${name}</h3>
            <p class="card__size">Размеры (ШхГхВ) - ${sizes} см</p>
            <p class="card__square">Площадь - <span>${square}</span> м2</p>
            <div class="card__params">
              <span>Оснащение номера</span>
              <ul class="card__params-list">
                ${equipment.empty?`<li class="card__params-item card__params-item--`+equipment.empty+`">
                  <span class="visually-hidden">Пустой</span>
                </li>`:""}
                ${equipment.sofa?`<li class="card__params-item card__params-item--`+equipment.sofa+`">
                  <span class="visually-hidden">Диван</span>
                </li>`:""}
                ${equipment.complex?`<li class="card__params-item card__params-item--`+equipment.complex+`">
                  <span class="visually-hidden">Комплекс</span>
                </li>`:""}
                ${equipment.toy?`<li class="card__params-item card__params-item--`+equipment.toy+`">
                  <span class="visually-hidden">Когтеточка</span>
                </li>`:""}
                ${equipment.house?`<li class="card__params-item card__params-item--`+equipment.house+`">
                  <span class="visually-hidden">Домик</span>
                </li>`:""}
              </ul>
            </div>
            <p class="card__price">Цена за сутки: <span><b>${price}</b>&#8381;</span></p>
            <a class="card__btn" href="#">Забронировать</a>
          </div>
    `);

	cardsHotels.insertAdjacentElement('beforeend', card);
}

// Функция создания массива из всех выбранных чекбоксов
function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {

    if (name === 'square') {
      return +el.value
    } else {
      return el.value
    }
  });
}

// Функция создания массива из всех чекбоксов
function getCheckedAll(name) {
  checkedAll[name] = Array.from(document.querySelectorAll('input[name=' + name + ']')).map(function (el) {

    if (name === 'square') {
      return +el.value
    } else {
      return el.value
    }
  });
}

function init() {

  // получение данных

  const goods = [];

  getData('./db/hotels.json').then(function(data) { 
    goods.push(...data);
    goods.forEach(createCardHotel);
  });

  // показ кнопки "сбросить фильтр"

  form.addEventListener('change', function() {
    resetBtn.classList.add('filter__reset-btn--show');
  });

  // cброс фильтра 

  resetBtn.addEventListener('click', function(evt) {
    cardsHotels.innerHTML = '';
    goods.forEach(createCardHotel);
  });

  // получение данных о заполненных полях

  submitBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      let valueFrom = +priceFrom.value;
      let valueTo = +priceTo.value;
      getChecked('room');
      getChecked('square');
      getCheckedAll('room')
      getCheckedAll('square')

      // если чекбоксы выбраны, записать их в переменную
      // если не выбраны, записать в переменную весь массив чекбоксов

      let room = checked.room.length ? checked.room : checkedAll.room;
      let square = checked.square.length ? checked.square : checkedAll.square;
      
      let searchGoods = goods.filter(function(item){
      const params = Object.keys(item.equipment);   
        // if (valueFrom <= item.price && item.price <= valueTo && square.includes(item.square) && room.some(r => params.includes(r))) {
        //   return true;
        // } else {
        //   return false;
        // }

        let result = (valueFrom <= item.price && item.price <= valueTo && square.includes(item.square) && room.some(r => params.includes(r))) ? true : false;
        return result;
      })
      
      cardsHotels.innerHTML = '';
      searchGoods.forEach(createCardHotel);
    });


}

if (catalog) {
  init();
}

})();