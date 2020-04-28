var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var header = document.querySelector('.page-header');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      blueLogo();
    } else {
    	navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      if (header.classList.contains('page-header--scroll') === false ) {
      whiteLogo();
      }
    }
  });
