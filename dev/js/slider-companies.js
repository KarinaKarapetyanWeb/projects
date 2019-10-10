var prevBtn = document.querySelector('.slider-btn--left');
var nextBtn = document.querySelector('.slider-btn--right');
var slider = document.querySelector('.manufacturers-slider__list');
var sliderItems = document.querySelectorAll('.manufacturers-slider__list-item');
var timer;
var counter = 0;

if (slider) {
	autoSlider();
	if (window.innerWidth >= 1200) {
	var number = 5;
	var size = 210;
} else if (window.innerWidth >= 768) {
	var number = 3;
	var size = 210;
} else {
	var number = 1;
	var size = 160;
}

nextBtn.addEventListener ('click', sliderRight);
prevBtn.addEventListener ('click', sliderLeft);

function autoSlider() {
	timer = setTimeout(function () {
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
	autoSlider();
	}, 20000);
}

function sliderRight() {
	clearTimeout (timer);
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
	clearTimeout (timer);
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
