var itemDirection = document.querySelectorAll('.by-direction__list-item--arrow');
var itemCategory = document.querySelectorAll('.by-category__list-item--arrow');
var itemSubMenu = document.querySelectorAll('.sub-menu__item--arrow');

for (var i = 0 ; i < itemDirection.length; i++) {
	itemDirection[i].addEventListener('click', function (evt) {
	document.querySelector('.by-direction__list-item--arrow > .sub-menu').style.display = 'block';
	});
}

for (var i = 0 ; i < itemCategory.length; i++) {
	itemCategory[i].addEventListener('click', function (evt) {
	document.querySelector('.by-category__list-item--arrow > .sub-menu').style.display = 'block';
	});
}

for (var i = 0 ; i < itemSubMenu.length; i++) {
	itemSubMenu[i].addEventListener('click', function (evt) {
	document.querySelector('.sub-menu__item--arrow > .sub-menu--level2').style.display = 'block';
	});
}

