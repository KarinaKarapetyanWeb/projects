var mainItem = document.querySelectorAll('.main-list__item');

if (window.innerWidth >= 1200) {
	for (var i = 0 ; i < mainItem.length; i++) {
		if (mainItem[i].children.length > 1) {
			mainItem[i].addEventListener('mouseenter', function (evt) {
				this.querySelector('.main-list__item > .sub-menu').style.display = 'block';
			});
			mainItem[i].addEventListener('mouseleave', function (evt) {
				this.querySelector('.main-list__item > .sub-menu').style.display = 'none';
			});
		}
	}
} else {
	for (var i = 0 ; i < mainItem.length; i++) {
		if (mainItem[i].children.length > 1) {
			mainItem[i].addEventListener('click', function (evt) {
				if (this.classList.contains ('main-list__item--closed')) {
					evt.preventDefault();
					this.classList.remove ('main-list__item--closed');
					this.classList.add ('main-list__item--opened');
					this.querySelector('.main-list__item > .sub-menu').style.display = 'block';
				} else {
					evt.preventDefault();
					this.classList.remove ('main-list__item--opened');
					this.classList.add ('main-list__item--closed');
					this.querySelector('.main-list__item > .sub-menu').style.display = 'none';
				}
			});
		}
	}
}