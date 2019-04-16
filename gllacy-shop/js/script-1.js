var popularCardsData = [
  {
    imgUrl: 'img/1.jpg',
    text: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    price: 310,
    isHit: true
  },
  {
    imgUrl: 'img/2.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 380,
    isHit: true
  },
  {
    imgUrl: 'img/3.jpg',
    text: 'Сливочно-клубничное с присыпкой из белого шоколада',
    price: 355,
    isHit: true
  },
  {
    imgUrl: 'img/4.jpg',
    text: 'Сливочное крем-брюле с карамельной подливкой',
    price: 415,
    isHit: true
  }
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

  var popularCardList = document.querySelector('.popular-icecream-list'); 
  
  var renderPopularCards = function (popularGoods) {
    for (var i = 0; i < popularGoods.length; i++) {
    var popularCardItem = createCard(popularGoods[i]);
    popularCardList.appendChild(popularCardItem);
    };
};

  renderPopularCards(popularCardsData);