var cardsData = [
  {
    imgUrl: 'img/1.jpg',
    text: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    price: 310,
    isHit: false,
  },
  {
    imgUrl: 'img/2.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 380,
    isHit: false,
  },
  {
    imgUrl: 'img/3.jpg',
    text: 'Сливочно-клубничное с присыпкой из белого шоколада',
    price: 355,
    isHit: false,
  },
  {
    imgUrl: 'img/4.jpg',
    text: 'Сливочное крем-брюле с карамельной подливкой',
    price: 415,
    isHit: false,
  },
  {
    imgUrl: 'img/2-1.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 325,
    isHit: false,
  },
  {
    imgUrl: 'img/2-2.jpg',
    text: 'Сливочно-черничное с цельными ягодами черники',
    price: 410,
    isHit: false,
  },
  {
    imgUrl: 'img/2-3.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 375,
    isHit: false,
  },
  {
    imgUrl: 'img/2-4.jpg',
    text: 'Сливочное с шоколадной стружкой',
    price: 320,
    isHit: false,
  },
  {
    imgUrl: 'img/3-1.jpg',
    text: 'Сливочно-ванильное с кусочками шоколада',
    price: 440,
    isHit: false,
  },
  {
    imgUrl: 'img/3-2.jpg',
    text: 'Сливочное с ментоловым сиропом',
    price: 435,
    isHit: false,
  },
  {
    imgUrl: 'img/3-3.jpg',
    text: 'Сливочное с кусочками черного шоколада',
    price: 455,
    isHit: false,
  },
  {
    imgUrl: 'img/3-4.jpg',
    text: 'Сливочное с мятным сиропом',
    price: 420,
    isHit: false,
  },
];

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
    element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function (good) {
  var listItem = makeElement('li', 'catalog-item');

  var title = makeElement('h3', 'icecream-item-name');
  listItem.appendChild(title);

  var linkName = makeElement('a', 'linkName', good.text);
  linkName.href = '#';
  title.appendChild(linkName);

  var picture = makeElement('p', 'icecream-item-image');
  listItem.appendChild(picture);

  var linkPicture = makeElement('a', 'linkPicture');
  picture.appendChild(linkPicture);

  var imgPicture = makeElement('img', 'imgPicture');
  imgPicture.src = good.imgUrl;
  imgPicture.alt = good.text;
  linkPicture.appendChild(imgPicture);

  var price = makeElement('p', 'icecream-item-price');
  listItem.appendChild(price);

  var spanPrice =  makeElement('span', 'icecream-price', good.price+' ₽/кг');
  price.appendChild(spanPrice); 

  var button = makeElement('p', 'btn-quick-view');
  listItem.appendChild(button);

  var linkButton = makeElement('a', 'button');
  linkButton.href = '#';
  linkButton.textContent = 'Быстрый просмотр';
  button.appendChild(linkButton); 
  
  if (good.isHit) {
    listItem.classList.add('popular-icecream-item'); 
  }
  
  return listItem;
  };

  var cardList = document.querySelector('.catalog-list'); 

  var renderCards = function (goods) {
    for (var i = 0; i < goods.length; i++) {
    var cardItem = createCard(goods[i]);
    cardList.appendChild(cardItem);
    };
};

renderCards(cardsData);



