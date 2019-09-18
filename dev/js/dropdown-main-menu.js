var mainItem = document.querySelectorAll('.main-list__item');

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
