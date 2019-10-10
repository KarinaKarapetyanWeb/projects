// var itemDirection = document.querySelectorAll('.by-direction__list-item--arrow');
// var itemCategory = document.querySelectorAll('.by-category__list-item--arrow');
// var itemSubMenu = document.querySelectorAll('.sub-menu__item--arrow');
// var salesLink = document.querySelector('.sales-link');
// var subMenuClose = document.querySelectorAll('.sub-menu__close');

// 	for (var i = 0 ; i < itemDirection.length; i++) {
// 		itemDirection[i].addEventListener('click', function (evt) {
// 		this.querySelector('.by-direction__list-item--arrow > .sub-menu').style.display = 'block';
// 		salesLink.style.display = 'none';
// 	});
// }

// 	for (var i = 0 ; i < itemCategory.length; i++) {
// 		itemCategory[i].addEventListener('click', function (evt) {
// 		this.querySelector('.by-category__list-item--arrow > .sub-menu').style.display = 'block';
// 		salesLink.style.display = 'none';
// 	});
// }

// 	for (var i = 0 ; i < itemSubMenu.length; i++) {
// 		itemSubMenu[i].addEventListener('click', function (evt) {
// 		this.querySelector('.sub-menu__item--arrow > .sub-menu--level2').style.display = 'block';
// 		salesLink.style.display = 'none';
// 		});
// 	}

// 	for (var i = 0 ; i < subMenuClose.length; i++) {
// 		subMenuClose[i].addEventListener('click', function (evt) {
// 			this.closest('.sub-menu').style.display = 'none';
// 		});
// 	}

var itemDirection = document.querySelectorAll('.by-direction__list-item--arrow');
var itemCategory = document.querySelectorAll('.by-category__list-item--arrow');
var itemSubMenu = document.querySelectorAll('.sub-menu__item--arrow');
var subMenuClose = document.querySelectorAll('.sub-menu__close');

subMenuClose.forEach(function(element) {
    element.addEventListener('click', function (evt) {
	element.closest('.sub-menu').style.display = 'none';
	});
});

