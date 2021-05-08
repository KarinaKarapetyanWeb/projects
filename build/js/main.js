'use strict'; 

(function() {
    const menuToggle = document.querySelector('.main-nav__toggle');

    if (menuToggle) {
        const mainNav = document.querySelector('.main-nav');

        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('main-nav--opened');
        });
    }    
})();