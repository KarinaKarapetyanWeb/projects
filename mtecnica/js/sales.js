var itemDirection = document.querySelectorAll('.by-direction__list-item--arrow');
var itemCategory = document.querySelectorAll('.by-category__list-item--arrow');
var itemSubMenu = document.querySelectorAll('.sub-menu__item--arrow');
var salesLink = document.querySelector('.sales-link');

	for (var i = 0 ; i < itemDirection.length; i++) {
		itemDirection[i].addEventListener('mouseenter', function (evt) {
		salesLink.style.display = 'none';
	});
		itemDirection[i].addEventListener('mouseleave', function (evt) {
		salesLink.style.display = 'block';
	});
}

	for (var i = 0 ; i < itemCategory.length; i++) {
		itemCategory[i].addEventListener('mouseenter', function (evt) {
		salesLink.style.display = 'none';
	});
		itemCategory[i].addEventListener('mouseleave', function (evt) {
		salesLink.style.display = 'block';
	});
}