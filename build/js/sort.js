var sort = document.querySelector('.sort');

if (sort) {
	var catalogWrapper = document.querySelector('.catalog__wrapper');
	var sortList = document.querySelector('.sort__list');
	var sortToggle = document.querySelector('.sort__toggle');
	var sortBtn = document.querySelectorAll('.sort__btn');
	var sortItem = document.querySelectorAll('.sort__item');
	var sortSquareMin = document.querySelector('.sort__item--square-min');
	var sortSquareMax = document.querySelector('.sort__item--square-max');
	var sortPriceMin = document.querySelector('.sort__item--price-min');
	var sortPriceMax = document.querySelector('.sort__item--price-max');

	sortToggle.addEventListener('click', function() {
		if (sortToggle.classList.contains('sort__toggle--active')) {
			if (sortSquareMin.classList.contains('sort__item--active')) {
				removeActive(sortSquareMax, sortPriceMin, sortPriceMax, sortToggle);
			} else if (sortSquareMax.classList.contains('sort__item--active')) {
				removeActive(sortSquareMin, sortPriceMin, sortPriceMax, sortToggle);
			} else if (sortPriceMin.classList.contains('sort__item--active')) {
				removeActive(sortSquareMax, sortSquareMin, sortPriceMax, sortToggle);
			} else if (sortPriceMax.classList.contains('sort__item--active')) {
				removeActive(sortSquareMax, sortSquareMin, sortPriceMin, sortToggle);
			}
		} else {
			sortToggle.classList.add('sort__toggle--active')
			for (var i = 0; i < sortItem.length; i++) {
				sortItem[i].classList.add('sort__item--active');
			}
			sortSquareMin.addEventListener('click', function() {
				this.classList.add('sort__item--active');
				removeActive(sortSquareMax, sortPriceMin, sortPriceMax, sortToggle);
				mySort('data-square');
			});
			sortSquareMax.addEventListener('click', function() {
				this.classList.add('sort__item--active');
				removeActive(sortSquareMin, sortPriceMin, sortPriceMax, sortToggle);
				mySortDesc('data-square');
			});
			sortPriceMin.addEventListener('click', function() {
				this.classList.add('sort__item--active');
				removeActive(sortSquareMax, sortSquareMin, sortPriceMax, sortToggle);
				mySort('data-price');
			});

			sortPriceMax.addEventListener('click', function() {
				this.classList.add('sort__item--active');
				removeActive(sortSquareMax, sortSquareMin, sortPriceMin, sortToggle);
				mySortDesc('data-price');
			});

		}
		
	});

	function removeActive(btn2, btn3, btn4, toggle) {
		toggle.classList.remove('sort__toggle--active')
		btn2.classList.remove('sort__item--active');
		btn3.classList.remove('sort__item--active');
		btn4.classList.remove('sort__item--active');
	}

	function mySort(sortType) {
		for (let i = 0; i < catalogWrapper.children.length; i++) {
			for (let y = i; y < catalogWrapper.children.length; y++) {
				if (+catalogWrapper.children[i].getAttribute(sortType) > +catalogWrapper.children[y].getAttribute(sortType)) {
					replacedNode = catalogWrapper.replaceChild(catalogWrapper.children[y], catalogWrapper.children[i]);
					insertAfter(replacedNode, catalogWrapper.children[i]);
				}
			}
		}
	}

	function mySortDesc(sortType) {
		for (let i = 0; i < catalogWrapper.children.length; i++) {
			for (let y = i; y < catalogWrapper.children.length; y++) {
				if (+catalogWrapper.children[i].getAttribute(sortType) < +catalogWrapper.children[y].getAttribute(sortType)) {
					replacedNode = catalogWrapper.replaceChild(catalogWrapper.children[y], catalogWrapper.children[i]);
					insertAfter(replacedNode, catalogWrapper.children[i]);
				}
			}
		}
	}

	function insertAfter(elem, refElem) {
		return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
	}

}