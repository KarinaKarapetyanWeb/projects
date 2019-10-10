var prevBtn = document.querySelector('.slider-video-btn--left');
var nextBtn = document.querySelector('.slider-video-btn--right');
var slider = document.querySelector('.video__list');
var sliderItems = document.querySelectorAll('.video__item');
var counter = 0;

if (slider) {
	if (window.innerWidth >= 1200) {
		var number = 2;
		var size = 525;
	} else if (window.innerWidth >= 768) {
		var number = 1;
		var size = 495;
	} else {
		var number = 1;
		var size = 285;
	}

	nextBtn.addEventListener ('click', sliderRight);
	prevBtn.addEventListener ('click', sliderLeft);

	function sliderRight() {
		counter++;
		slider.style.transform = 'translateX(' + (-size*counter) + 'px)';
		if (counter > 0) {
			prevBtn.classList.remove('disabled');
		}
		if (counter <= 0) {
			prevBtn.classList.add('disabled');
			slider.style.transform = "none";
		}
		if (counter >= sliderItems.length - number) {
			nextBtn.classList.add('disabled');
			counter = sliderItems.length - number;
			slider.style.transform = 'translateX(' + (-size*counter) + 'px)';
		}
	}

	function sliderLeft() {
		counter--;
		slider.style.transform = 'translateX(' + (-size*counter) + 'px)';

		if (0 < counter < sliderItems.length - 2) {
			nextBtn.classList.remove('disabled');
			slider.style.transform = 'translateX(' + (-size*counter) + 'px)';
		}
		if (counter <= 0) {
			prevBtn.classList.add('disabled');
			slider.style.transform = "none";
		}
	}
}