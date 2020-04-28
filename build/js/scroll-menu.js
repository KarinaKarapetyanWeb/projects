var mainNav = document.querySelector('.main-nav');
var pageHeader = document.querySelector('.page-header');
var pageMain = document.querySelector('.page-main');
var logoMob = document.querySelector('.main-nav__logo-image--mob');
var logoTab = document.querySelector('.main-nav__logo-image--tab');
var logoDesk = document.querySelector('.main-nav__logo-image--desk');

window.addEventListener('scroll', function(){
	if (window.innerWidth < 1440) {
	  mainNav.classList.add('main-nav--scroll');
	  pageHeader.classList.add('page-header--scroll');
	  pageMain.classList.add('page-main--scroll');
	  blueLogo();
	}
	if (window.innerWidth >= 1440 && window.pageYOffset >= 628) {
	 	mainNav.classList.add('main-nav--scroll');
	  	pageHeader.classList.add('page-header--scroll');
	  	pageMain.classList.add('page-main--scroll');
	  	blueLogo();
	}	

	if ((window.pageYOffset === 0 && mainNav.classList.contains('main-nav--opened') === false) || (window.innerWidth >= 1440 && window.pageYOffset < 628) ) {
		mainNav.classList.remove('main-nav--scroll');
	  	pageHeader.classList.remove('page-header--scroll');
	  	pageMain.classList.remove('page-main--scroll');
	  	whiteLogo();
	}
});
