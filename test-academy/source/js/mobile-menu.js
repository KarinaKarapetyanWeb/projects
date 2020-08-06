var navMain = document.querySelector('.main-nav');

if (navMain) {
	var navToggle = document.querySelector('.page-header__toggle');
	navMain.classList.remove('main-nav--nojs');
	navToggle.classList.remove('page-header__toggle--nojs');

	navToggle.addEventListener('click', function() {
		if (navToggle.classList.contains ('page-header__toggle--closed')) {
			navToggle.classList.remove('page-header__toggle--closed');
			navToggle.classList.add('page-header__toggle--opened');
			navMain.classList.remove('main-nav--closed');
			navMain.classList.add('main-nav--opened');
		} else {
			navToggle.classList.remove('page-header__toggle--opened');
			navToggle.classList.add('page-header__toggle--closed');
			navMain.classList.add('main-nav--closed');
			navMain.classList.remove('main-nav--opened');
		}
	});
}
