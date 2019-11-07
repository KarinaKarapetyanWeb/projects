var advantagesSection = document.querySelector('.advantages');
var advantagesItem = document.querySelectorAll('.advantages__item');

if (advantagesSection) {
	for (var i = 0 ; i < advantagesItem.length; i++) {
			advantagesItem[i].addEventListener('click', function (evt) {
				if (this.classList.contains ('advantages__item--closed')) {
					evt.preventDefault();
					this.classList.remove ('advantages__item--closed');
					this.classList.add ('advantages__item--active');
				} else {
					evt.preventDefault();
					this.classList.remove ('advantages__item--active');
					this.classList.add ('advantages__item--closed');
				}
			});
	}
}

