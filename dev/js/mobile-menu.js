var navMain = document.querySelector('.main-nav');
var navEquip = document.querySelector('.equipment-nav__wrapper');
var navToggle = document.querySelector('.main-nav__toggle');
var navEquipToggle = document.querySelector('.equipment-nav__toggle');

navToggle.addEventListener('click', function() {
	if (navMain.classList.contains ('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	} 
	if (navEquip.classList.contains ('equipment-nav__wrapper--opened')) {
		navEquip.classList.add('equipment-nav__wrapper--closed');
		navEquip.classList.remove('equipment-nav__wrapper--opened');
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
		navEquipToggle.classList.remove('equipment-nav__toggle--close');
		navEquipToggle.classList.add('equipment-nav__toggle--open');
	}
	});