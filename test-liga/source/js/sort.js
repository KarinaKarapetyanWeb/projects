(function () {
 const sort = document.querySelector('.sort');

 if (sort) {
 	const cardsHotels = document.querySelector(".catalog__wrapper");
    const sortToggle = sort.querySelector('.sort__toggle');
    const sortBtn = sort.querySelectorAll('.sort__btn');
    const sortList = sort.querySelector('.sort__list');
    const sortItem = sort.querySelectorAll('.sort__item');
    const sortSquareMin = sort.querySelector('.sort__item--square-min');
    const sortSquareMax = sort.querySelector('.sort__item--square-max');
    const sortPriceMin = sort.querySelector('.sort__item--price-min');
    const sortPriceMax = sort.querySelector('.sort__item--price-max');

	// Сортировка - выпадающее меню

	sortToggle.addEventListener('click', function() {
	  if (sortToggle.classList.contains('sort__toggle--active')) {
	      switch (element.classList.contains('sort__item--active')) {
	      case element === 'sortSquareMin': 
	        removeActive(sortSquareMax, sortPriceMin, sortPriceMax, sortToggle);
	      break;
	      case element === 'sortSquareMax': 
	        removeActive(sortSquareMin, sortPriceMin, sortPriceMax, sortToggle);
	      break;
	      case element === 'sortPriceMin': 
	        removeActive(sortSquareMax, sortSquareMin, sortPriceMax, sortToggle);
	      break;
	      case element === 'sortPriceMax': 
	        removeActive(sortSquareMax, sortSquareMin, sortPriceMin, sortToggle);
	      break;
	    }
	  } else {
	    sortToggle.classList.add('sort__toggle--active')
	    for (let i = 0; i < sortItem.length; i++) {
	      sortItem[i].classList.add('sort__item--active');
	    }
	    // Обработка кликов и закрытие выпадающего меню

	    clickHandler(sortSquareMin, sortSquareMax, sortPriceMin, sortPriceMax, sortToggle, '.card__square span');
	    clickHandler(sortSquareMax, sortSquareMin, sortPriceMin, sortPriceMax, sortToggle, '.card__square span');
	    clickHandler(sortPriceMin, sortSquareMax, sortSquareMin, sortPriceMax, sortToggle, '.card__price b');
	    clickHandler(sortPriceMax, sortSquareMax, sortSquareMin, sortPriceMin, sortToggle, '.card__price b');
	  }
	  
	});

	// Функция обработки кликов
	function clickHandler(link, btn2, btn3, btn4, toggle, sortType) {
	  link.addEventListener('click', function() {
	    link.classList.add('sort__item--active');
	    removeActive(btn2, btn3, btn4, toggle);
	    switch (link) {
	      case sortSquareMin: 
	      case sortPriceMin:
	        mySort(sortType);
	      break;
	      case sortSquareMax: 
	      case sortPriceMax:
	        mySortDesc(sortType);
	      break;
	    }
	  }); 
	}

	// Функция снятия класса active
	function removeActive(btn2, btn3, btn4, toggle) {
	  toggle.classList.remove('sort__toggle--active')
	  btn2.classList.remove('sort__item--active');
	  btn3.classList.remove('sort__item--active');
	  btn4.classList.remove('sort__item--active');
	}

	// Функция сортировки - по возрастанию
	function mySort(sortType) {
	  for (let i = 0; i < cardsHotels.children.length; i++) {
	    for (let y = i; y < cardsHotels.children.length; y++) {
	      if (+cardsHotels.children[i].querySelector(sortType).textContent > +cardsHotels.children[y].querySelector(sortType).textContent) {
	        replacedNode = cardsHotels.replaceChild(cardsHotels.children[y], cardsHotels.children[i]);
	        insertAfter(replacedNode, cardsHotels.children[i]);
	      }
	    }
	  }
	}

	// Функция сортировки - по убыванию
	function mySortDesc(sortType) {
	  for (let i = 0; i < cardsHotels.children.length; i++) {
	    for (let y = i; y < cardsHotels.children.length; y++) {
	      if (+cardsHotels.children[i].querySelector(sortType).textContent < +cardsHotels.children[y].querySelector(sortType).textContent) {
	        replacedNode = cardsHotels.replaceChild(cardsHotels.children[y], cardsHotels.children[i]);
	        insertAfter(replacedNode, cardsHotels.children[i]);
	      }
	    }
	  }
	}

	// Функция - поменять местами элементы
	function insertAfter(elem, refElem) {
	  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
	}
}

})();