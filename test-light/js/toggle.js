'use strict';

(function () {

	const screen = document.querySelector('.screen');

	if (screen) {
		const buttons = Array.from(screen.querySelectorAll('.button'));	

		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function (evt) {
				evt.preventDefault();
				evt.target.classList.toggle('button--on');
			});
		}
	}

})();